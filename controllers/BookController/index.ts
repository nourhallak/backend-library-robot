import { Books, book } from "../../Database/Books";
import { Request, Response } from "express";

/**
  @desc Get book info
  @route /screen/search/:bookid
  @method GET
  @access public
*/
export const getBookInfo = (req: Request, res: Response) => {
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
export const getAllBooks = (req: Request, res: Response) => {
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
export const scanBookRequest = (req: Request, res: Response) => {
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
export const cancelScanRequest = (req: Request, res: Response) => {
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
export const returnBookStatus = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Post status of returned book." });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
