import { Request, Response } from "express";
import { status_1 } from "../../Database/Statuses";

/**
  @desc go home
  @route /screen/gohome
  @method POST
  @access public
*/
export const goHome = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Post Go Home" });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc cancel
  @route /screen/cancel
  @method POST
  @access public
*/
export const cancel = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Cancel." });
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
    res.status(200).json({ message: "Pause." });
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
    res.status(200).json(status_1);
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
    res.status(200).json({ message: "Get battery percentage." });
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
export const searchForBook = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Post command to navigate to a book",
    });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
