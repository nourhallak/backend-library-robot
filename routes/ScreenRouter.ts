import express, { Request, Response } from "express";
const router = express.Router();
import {
  goHome,
  pause,
  getCurrentStatus,
  getBatteryPercentage,
  moveToBook,
} from "../controllers/RobotController";
import {
  getBookInfo,
  getAllBooks,
  scanBookRequest,
  cancelScanRequest,
  returnBookStatus,
} from "../controllers/BookController";

//Search
router.route("/search/:bookid").get(getBookInfo);
router.route("/search/books/allbooks").get(getAllBooks);

//Return
router.route("/return/scan").post(scanBookRequest);
router.route("/return/cancelscan").post(cancelScanRequest);
router.route("/return/returnbook").post(returnBookStatus);

//General operations
router.route("/gohome").post(goHome);
// router.route("/cancel").post(cancel);
router.route("/pause").post(pause);
router.route("/currentstatus").get(getCurrentStatus);
router.route("/batterypercentage").get(getBatteryPercentage);
router.route("/movetobook").post(moveToBook);

module.exports = router;
