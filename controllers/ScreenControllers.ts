import { Request, Response } from "express";
import { Books, book } from "../Database/Books";
import { status_1 } from "../Database/Statuses";

/**
  @desc Get book info
  @route /screen/search/:bookid
  @method GET
  @access public
*/
const getBookInfo = (req: Request, res: Response) => {
  // If book not found be3alli2
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
    if (book == emptybook) {
      res.status(404);
      throw new Error("book not found");
    }
    res.status(200);
    res.json(Books[Books.indexOf(book)]);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc Get all books
  @route /screen/search/books/allbooks
  @method GET
  @access public
*/
const getAllBooks = (req: Request, res: Response) => {
  try {
    res.status(200).json(Books);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc Scan book request
  @route  /screen/return/scan
  @method POST
  @access public
*/
const scanBookRequest = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Post scan book." });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc cancel scan request
  @route /screen/return/cancelscan
  @method POST
  @access public
*/
const cancelScanRequest = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Post cancel scan book." });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc return book status
  @route /screen/return/returnbook
  @method POST
  @access public
*/
const returnBookStatus = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Post status of returned book." });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

/**
  @desc go home
  @route /screen/gohome
  @method POST
  @access public
*/
const goHome = (req: Request, res: Response) => {
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
const cancel = (req: Request, res: Response) => {
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
const pause = (req: Request, res: Response) => {
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
const getCurrentStatus = (req: Request, res: Response) => {
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
const getBatteryPercentage = (req: Request, res: Response) => {
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
const searchForBook = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Post command to navigate to a book",
    });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = {
  getBookInfo,
  getAllBooks,
  scanBookRequest,
  cancelScanRequest,
  returnBookStatus,
  goHome,
  cancel,
  pause,
  getCurrentStatus,
  getBatteryPercentage,
  searchForBook,
};
