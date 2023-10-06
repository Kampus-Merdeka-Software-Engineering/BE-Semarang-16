import express from "express";
import {createCourse
} from "../controllers/CourseController.js";

const router = express.Router();

router.post("/course", createCourse);


export default router;

