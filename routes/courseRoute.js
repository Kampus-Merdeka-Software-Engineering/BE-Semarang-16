import express from "express";
import {
  findAllCourses,
  searchCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.get("/course", findAllCourses);
router.get("/searchcourse", searchCourse);

export default router;
