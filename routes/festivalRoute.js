import { Router } from "express";

import {
    getAllFestivalController,
    getFestivalByIdController,
    getFestivalByTitleController,
    addFestivalController,
    deleteFestivalController,
    updateFestivalController,
} from "../controllers/festivalController.js";

const router = Router();

router.get("/", getAllFestivalController);
router.get("/", getFestivalByIdController);
router.get("/findbytitle", getFestivalByTitleController);
router.post("/", addFestivalController);
router.delete("/:id", deleteFestivalController);
router.put("/:id", updateFestivalController);
export default router;
