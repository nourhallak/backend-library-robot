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
    res.status(200);
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
    res.status(400);
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
//     res.status(200);

//   } catch (error) {
//     console.log(error);
//     res.status(400);
//   }
// };

/**
 * @desc move camera
 * @route /screen/movecamera:distance
 * @method POST
 * @access public
 */
export const movecamera = (req: Request, res: Response) => {
  try {
    res.status(200);
    const robot = RosService.getInstance();
    robot.moveCamera(Number(req.params.distance));
  } catch (error) {
    console.log(error);
    res.status(400);
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
    res.status(200);
    const robot = RosService.getInstance();
    robot.pause(true);
  } catch (error) {
    console.log(error);
    res.status(400);
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
    // res.status(200).json(robotCurrentStatus);
  } catch (error) {
    console.log(error);
    res.status(400);
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
    res.json(robot.batteryPercentage.data);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
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
