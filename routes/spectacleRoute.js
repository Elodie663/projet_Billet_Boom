import { Router } from "express";
import { postAddSpectacleController,deleteSpectacleByIdController, getAllSpectaclesController, updateSpectacleByIdController,getOneSpectacleByIdController } from "../controllers/spectacleController.js";


const router = Router();

// Spectacle |||||||||||||||||||||||||||
router.get("/", getAllSpectaclesController);
router.post("/", postAddSpectacleController);
router.delete("/:id", deleteSpectacleByIdController);
router.put("/:id", updateSpectacleByIdController);
router.get("/:id", getOneSpectacleByIdController);

export default router;