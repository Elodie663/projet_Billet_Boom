import { Router } from "express";
import {
  postAddSeanceCinema,
  getSeanceByIdController,
  deleteSeanceCinemaController,
  modifierSeanceController,
  getAllSeancesController,
} from "../controllers/cinemaController.js";
const router = Router();

router.post("/", postAddSeanceCinema);
router.get("/:id", getSeanceByIdController);
router.delete("/:id", deleteSeanceCinemaController);
router.put("/update/:id", modifierSeanceController);
router.get("/", getAllSeancesController);
export default router;
