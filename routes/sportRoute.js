import { Router } from "express";
import { postAddSportController,deleteSportByIdController, getAllSportsController, updateSportByIdController,getOneByIdController } from "../controllers/sportController.js";

const router = Router();

// SPORT |||||||||||||||||||||||||||
router.get("/", getAllSportsController);
router.post("/", postAddSportController);
router.delete("/:id", deleteSportByIdController);
router.put("/:id", updateSportByIdController);
router.get("/:id", getOneByIdController);

export default router;