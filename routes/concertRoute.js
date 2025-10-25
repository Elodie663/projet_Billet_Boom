import { Router } from "express";

import {
    getAllConcertController,
    addConcertController,
    deleteConcertController,
    updateConcertController,
} from "../controllers/concertController.js";

const router = Router();

router.get("/", getAllConcertController);
router.post("/", addConcertController);
router.delete("/:id", deleteConcertController);
router.put("/:id", updateConcertController);
export default router;
