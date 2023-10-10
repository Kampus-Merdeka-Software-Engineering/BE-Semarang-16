import express from "express";
import CourseRoute from "./routes/CourseRoute.js";
import TutorRoute from "./routes/TutorRoute.js";
import FaqRoute from "./routes/FaqRoute.js";
import cors from "cors";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/course", CourseRoute);
app.use("/tutor", TutorRoute);
app.use("/faq", FaqRoute);

app.listen(PORT, "0.0.0.0", function() {} );
