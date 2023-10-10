import express from "express";
import { createCourse, getCoursefromUser } from "../controllers/CourseController.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCoursefromUser);

export default router;
