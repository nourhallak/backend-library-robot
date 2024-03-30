import express,{Request,Response} from "express";
const dotenv = require('dotenv').config();

const app=express();
// Parse data
app.use(express.json());

app.use("/screen", require("./routes/ScreenRouter"));

const port=process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
