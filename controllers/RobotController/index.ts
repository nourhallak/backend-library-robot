import { Request, Response } from "express";
import { RosService } from "../../services/rosService";
import { rosSubscribers } from "../../services/rosService/rosSubscribers";
import { book, Books } from "../../Database/Books";
import { RobotState } from "../../states/roboteState";
import { robotCurrentStatus } from "../../types/currentStatus";

/**
  @desc go home
  @route /screen/gohome
  @method POST
  @access public
*/
export const goHome = (req: Request, res: Response) => {
  try {
    res.status(200).json({});
    const robot = RosService.getInstance();
    robot.moveRobot({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({});
  }
};

// /**
//   @desc cancel
//   @route /screen/cancel
//   @method POST
//   @access public
// */
// export const cancel = (req: Request, res: Response) => {
//   try {
//     res.status(200).json({});

//   } catch (error) {
//     console.log(error);
//     res.status(400).json({});
//   }
// };

/**
 * @desc move camera
 * @route /screen/movecamera
 * @method POST
 * @access public
 */
export const movecamera = (req: Request, res: Response) => {
  try {
    const robot = RosService.getInstance();
    // robot.moveCamera(Number(req.body.data));
    robot.moveCamera(120);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

/**
 * @desc move camera
 * @route /screen/lowercamera
 * @method POST
 * @access public
 */
export const lowercamera = (req: Request, res: Response) => {
  try {
    const robot = RosService.getInstance();
    robot.moveCamera(0);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};
/**
 * @desc laser control
 * @route /screen/laser
 * @method POST
 * @access public
 */
export const laser = (req: Request, res: Response) => {
  try {
    const robot = RosService.getInstance();
    robot.laser(true);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

/**
 * @desc pause
 * @route /screen/pause
 * @method POST
 * @access public
 */
export const pause = (req: Request, res: Response) => {
  try {
    const robot = RosService.getInstance();
    robot.pause(true);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

/**
  @desc get current status
  @route /screen/currentstatus
  @method GET
  @access public
*/
export const getCurrentStatus = (req: Request, res: Response) => {
  try {
    let robotState = RobotState.getInstance();
    res.status(200).json({
      batteryPercentage: robotState.batteryPercentage,
      navigationState: robotState.navigationState,
      rackState: robotState.rackState,
      booksToDeliver: robotState.booksToDeliver,
      currentBook: robotState.currentBook,
      stateText: robotState.stateText,
      waitingForUserToConfirm: robotState.waitingForUserToConfirm,
    } satisfies robotCurrentStatus);
  } catch (error) {
    console.log(error);
    res.status(400).json({});
  }
};

/**
@desc get battery percentage
@route /screen/batterypercentage
@method GET
@access public
*/
export const getBatteryPercentage = (req: Request, res: Response) => {
  try {
    const robot = RobotState.getInstance();
    return res.status(200).json(robot.batteryPercentage);
  } catch (error) {
    console.log(error);
    res.status(400).json({});
  }
};

/**
  @desc Move to book
  @route  screen/moveToBook
  @method POST
  @access public
*/
export const moveToBook = (req: Request, res: Response) => {
  try {
    const emptybook: book = {
      name: "",
      auther: "",
      decoded_string: "",
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      orientation: {
        x: 0,
        y: 0,
        z: 0,
        w: 0,
      },
    };
    var book: book = emptybook;

    Books.forEach((element) => {
      if (element.decoded_string == req.params.bookid) {
        book = element;
      }
    });
    const robot = RosService.getInstance();
    robot.moveRobot({ position: book.position, orientation: book.orientation });
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

export const userConfirm = (req: Request, res: Response) => {
  try {
    const robot = RobotState.getInstance();
    robot.userConfirmed = true;
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

export const navigateToBooks = (req: Request, res: Response) => {
  try {
    const bookIds = req.body.books;
    const robot = RobotState.getInstance();
    robot.navigateToBooks(bookIds);
    console.log("Navigating to books");
    console.log(bookIds);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};
