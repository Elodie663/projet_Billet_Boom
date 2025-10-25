import { Router } from "express";
import {
  postAddPieceTheatre,
  getAllPiecesController,
  getPieceByIdController,
  deletePieceTheatreController,
  modifierPieceController,
} from "../controllers/theatreController.js";
const router = Router();

router.post("/", postAddPieceTheatre);
router.get("/", getAllPiecesController);
router.get("/:id", getPieceByIdController);
router.delete("/:id", deletePieceTheatreController);
router.put("/update/:id", modifierPieceController);
export default router;
