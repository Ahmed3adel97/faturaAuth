import express from "express";
import registerController from "../controller/register.js";
import loginController from "../controller/login.js";
import authenticate from "../middleware/auth.js";
import { userCheck, adminCheck } from "../middleware/checkRole.js";
import viewProfieController from "../controller/viewProfile.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
// Protected routes
// ------------------------------------------------------------------

router.get("/viewProfie/:role", adminCheck, authenticate, viewProfieController);

export default router;
