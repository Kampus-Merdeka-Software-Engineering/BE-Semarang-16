import express from "express";
import CourseRoute from "./routes/CourseRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/course", CourseRoute);

app.listen(PORT, "0.0.0.0", function () {});
