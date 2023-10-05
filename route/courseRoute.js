import express from "express";
import {createCourse
} from "../controllers/CourseControllers.js";

const router = express.Router();

router.post("/course", createCourse);


export default router;

