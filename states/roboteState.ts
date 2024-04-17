import { Books, book } from "../Database/Books";
import { goHome } from "../controllers/RobotController";
import { RosService } from "../services/rosService";
import { NavigationState, RackState } from "../types/enums";
import { RobotPosition } from "../types/robotPosition";
import { BatteryMessage } from "../types/rosMessages";

type Awaiter = (fn: (state: RobotState) => Boolean) => Promise<void>;

export class RobotState {
  private static instance: RobotState;
  public position: RobotPosition["position"] = {
    x: 0,
    y: 0,
    z: 0,
  };
  public orientation: RobotPosition["orientation"] = {
    x: 0,
    y: 0,
    z: 0,
    w: 1,
  };

  private subscribers: (() => void)[] = [];

  private awaiter: Awaiter = async (fn) => {
    return new Promise((resolve) => {
      this.subscribers.push(() => {
        console.log(this);
        if (fn(this)) {
          resolve();
        }
      });
    });
  };

  public batteryPercentage = 100;

  private _userConfirmed: boolean = false;
  public get userConfirmed() {
    return this._userConfirmed;
  }
  public set userConfirmed(userConfirmed: boolean) {
    if (userConfirmed != this._userConfirmed) {
      this._userConfirmed = userConfirmed;
      this.updateSubscribers();
    }
  }

  private _rackState: RackState = "waiting_for_goal";
  public get rackState() {
    return this._rackState;
  }
  public set rackState(rackState: RackState) {
    if (rackState != this._rackState) {
      this._rackState = rackState;
      this.updateSubscribers();
    }
  }

  private _navigationState: NavigationState = "READY";
  public get navigationState() {
    return this._navigationState;
  }
  public set navigationState(navigationState: NavigationState) {
    if (navigationState != this._navigationState) {
      this._navigationState = navigationState;
      this.updateSubscribers();
    }
  }

  public booksToDeliver: book[] = [];
  public currentBook: book | undefined;
  public stateText: string = "Ready";
  public waitingForUserToConfirm: boolean = false;

  private updateSubscribers() {
    this.subscribers.forEach((subscriber) => subscriber());
  }

  public navigateToBooks(bookIds: string[]) {
    // navigate to books
    const books = bookIds.map((bookId) =>
      Books.find(
        (book) =>
          book.decoded_string === bookId || book.decoded_string.includes(bookId)
      )
    );

    if (books.length === 0) {
      throw new Error("Books not found");
    }

    this.booksToDeliver = books.filter(Boolean) as book[];
    this.handleDelivery();
  }

  private moveRobotToHome() {
    const rosService = RosService.getInstance();
    rosService.moveRobot({
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      orientation: {
        x: 0,
        y: 0,
        z: 0,
        w: 1,
      },
    });
  }

  private async handleDelivery() {
    this.currentBook = this.booksToDeliver.shift();
    if (!this.currentBook) {
      this.moveRobotToHome();
      return;
    }

    this.stateText = `Navigating to book: ${this.currentBook.name}`;

    const rosService = RosService.getInstance();
    rosService.moveRobot({
      position: this.currentBook.position,
      orientation: this.currentBook.orientation,
    });

    await this.awaiter((state) => state.navigationState === "SUCCEEDED");

    this.stateText = `Searching for book: ${this.currentBook.name}`;

    rosService.moveCamera(this.currentBook.position.z);

    await this.awaiter((state) => state.rackState === "goal_reached");

    this.stateText = `Book location found: ${this.currentBook.name}`;

    this.waitingForUserToConfirm = true;
    this.userConfirmed = false;
    await this.awaiter((state) => state.userConfirmed);
    this.userConfirmed = false;
    this.waitingForUserToConfirm = false;

    rosService.moveCamera(0);

    this.stateText = `Success!`;

    await this.awaiter((state) => state.rackState === "waiting_for_goal");

    if (this.booksToDeliver.length > 0) {
      this.stateText = `Moving to next book`;
    } else {
      this.stateText = `Going back to home`;
    }

    this.handleDelivery();
  }

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): RobotState {
    if (!RobotState.instance) {
      RobotState.instance = new RobotState();
    }

    return RobotState.instance;
  }
}
