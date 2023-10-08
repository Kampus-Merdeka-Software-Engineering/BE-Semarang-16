import express from "express";
import {createTutor
} from "../controllers/TutorController.js";

const router = express.Router();

router.post("/tutor", createTutor);


export default router;

