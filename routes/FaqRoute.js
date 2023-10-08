import express from "express";
import {createFaq
} from "../controllers/FaqController.js";

const router = express.Router();

router.post("/faq", createFaq);


export default router;

 