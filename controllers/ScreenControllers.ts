// @desc Search for book
// @route POST /screen/search/:bookid
// @access public
const searchForBook =(req,res)=>{
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
const getBookInfo =(req,res)=>{
    try{
        res.status(200).json({message: `Get book info: ${req.params.bookid}`});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc Get all books
// @route GET /screen/search/books
// @access public
const getAllBooks =(req,res)=>(req,res)=>{
    try{
        res.status(200).json({message: "Get all books"});
    }
    catch(error){
        console.log(error)
        res.status(400);
    }
}

// @desc Scan book request
// @route POST /screen/return/scan
// @access public
const scanBookRequest =(req,res)=>{
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
const cancelScanRequest =(req,res)=>{
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
const returnBookStatus =(req,res)=>{
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
const goHome =(req,res)=>{
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
const cancel =(req,res)=>{
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
const pause =(req,res)=>{
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
const getCurrentStatus =(req,res)=>{
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
const getBatteryPercentage =(req,res)=>{
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