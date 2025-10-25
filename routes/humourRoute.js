import { Router } from "express";
import {
  postAddSpectacleHumour,
  getAllSpectacleHumourController,
  getHumourByIdController,
  deleteSpectacleHumourController,
  modifierHumourController,
} from "../controllers/humourController.js";
const router = Router();

router.post("/", postAddSpectacleHumour);
router.get("/", getAllSpectacleHumourController);
router.get("/:id", getHumourByIdController);
router.delete("/:id", deleteSpectacleHumourController);
router.put("/update/:id", modifierHumourController);
export default router;
