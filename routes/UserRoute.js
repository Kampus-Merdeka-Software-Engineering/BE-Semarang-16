import express from "express";
import {
signUpUser,
findAllUser,
findUserByUsername,

} from "../controllers/UserController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findAllUser);
router.get("/users/:username", findUserByUsername);


export default router;

