import express from "express";
import { login, register } from "../controllers/SimpleLogin.js";

const router = express.Router();

//Register me api
router.post("/register", register);

//Login me api
router.post("/login", login);

export default router;
