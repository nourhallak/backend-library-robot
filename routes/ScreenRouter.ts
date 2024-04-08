import express, { Request, Response } from "express";
const router = express.Router();
const {
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
} = require("../controllers/ScreenControllers");

//Search
router.route("/search/:bookid").get(getBookInfo);
router.route("/search/books/allbooks").get(getAllBooks);

//Return
router.route("/return/scan").post(scanBookRequest);
router.route("/return/cancelscan").post(cancelScanRequest);
router.route("/return/returnbook").post(returnBookStatus);

//General operations
router.route("/gohome").post(goHome);
router.route("/cancel").post(cancel);
router.route("/pause").post(pause);
router.route("/currentstatus").get(getCurrentStatus);
router.route("/batterypercentage").get(getBatteryPercentage);
router.route("/moveToBook").post(searchForBook);

module.exports = router;
