import express,{Request, Response} from "express";
import {Books,book} from "../Database/Books";

// @desc Search for book
// @route POST /screen/search/:bookid
// @access public
const searchForBook = (req: Request,res: Response)=>{
    try{
        res.status(200).json({message: `Post name of book to search for: ${req.params.bookid}`});
    }
    catch(error){
        console.log(error);
        res.status(400);
    }
}

// @desc Get book info
// @route GET /screen/search/:bookid
// @access public
const getBookInfo = (req: Request,res: Response)=>{
    // If book not found be3alli2
    try{
        const emptybook:book={
            name: "",
            auther: "",
            decoded_string: "",
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            orientation: {
                x: 0,
                y: 0,
                z: 0,
                w: 0
            }
        };
        var book:book=emptybook;
        
        Books.forEach(element => {
            if (element.decoded_string == req.params.bookid){
                book = element;       
            }
        });
        if(book == emptybook){
            res.status(404);
            throw new Error("book not found")
        }
        res.status(200);
        res.json(Books[Books.indexOf(book)]);      
    }
    catch(error){
        console.log(error);
        res.status(400);
    }
}

// @desc Get all books
// @route GET /screen/search/books/allbooks
// @access public
const getAllBooks = (req:Request,res: Response)=>{
    try{
        res.status(200).json(Books);
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc Scan book request
// @route POST /screen/return/scan
// @access public
const scanBookRequest = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message: "Post scan book."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc cancel scan request
// @route POST /screen/return/cancelscan
// @access public
const cancelScanRequest = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message: "Post cancel scan book."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc return book status
// @route POST /screen/return/returnbook
// @access public
const returnBookStatus = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message: "Post status of returned book."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc go home
// @route POST /screen/gohome
// @access public
const goHome = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message:"Post Go Home"});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc cancel
// @route POST /screen/cancel
// @access public
const cancel = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message:"Cancel."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc pause
// @route POST /screen/pause
// @access public
const pause = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message:"Pause."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc get current status
// @route GET /screen/currentstatus
// @access public
const getCurrentStatus = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message:"Get Current Status."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc get battery percentage
// @route GET /screen/batterypercentage
// @access public
const getBatteryPercentage = (req:Request,res: Response)=>{
    try{
        res.status(200).json({message:"Get battery percentage."});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

module.exports=
    {searchForBook, 
    getBookInfo,
    getAllBooks, 
    scanBookRequest,
    cancelScanRequest,
    returnBookStatus,
    goHome,
    cancel,
    pause,
    getCurrentStatus,
    getBatteryPercentage}