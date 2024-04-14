import { NavigationState, RackState } from "../types/enums";
import { RobotPosition } from "../types/robotPosition";

export class RobotState {
  private static instance: RobotState;
  public position: RobotPosition["position"] = {
    x: 0,
    y: 0,
    z: 0,
  };
  public batteryPercentage = 100;
  public rackState: RackState = "Done";
  public navigationState: NavigationState = "Reached";

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
