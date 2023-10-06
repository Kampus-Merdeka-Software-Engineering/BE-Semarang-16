import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import CourseRoute from "./routes/CourseRoute.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();


app.use(express.json());
app.use(cors());


app.use(CourseRoute);
app.use(UserRoute);


app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });