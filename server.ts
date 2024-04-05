import express, { Request, Response } from "express";
import cors from "cors";
const dotenv = require("dotenv").config();

const app = express();
// Parse data
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/screen", require("./routes/ScreenRouter"));

const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
