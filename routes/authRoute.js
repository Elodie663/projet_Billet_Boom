import { Router } from "express";
import { registerController, login } from "../controllers/authController.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", login);

export default router;
