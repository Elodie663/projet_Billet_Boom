import {
    getAllFestival,
    addFestival,
    findFestivalById,
    findFestivalByTitle,
    findFestivalByIdAndUpdate,
    deleteFestivalById,
} from "../models/festival.js";

//********** GetAll Festival ************//

export async function getAllFestivalController(req, res) {
    try {
        const allFestival = await getAllFestival();
        if (allFestival.length === 0) {
            return res.status(404).json({ message: "Festival not found" });
        }
        res.status(200).json(allFestival);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}
//********** Add New Festival ************//

export async function addFestivalController(req, res) {
    try {
        const { title, description, date, place, schedule, duration, price } =
            req.body;
        const newFestival = await addFestival(
            title,
            description,
            date,
            place,
            schedule,
            duration,
            price
        );
        return res.status(201).json({
            message: "Festival successfully create",
            concert: newFestival,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

//********** Get Festival by ID ************//

export async function getFestivalByIdController(req, res) {
    try {
        const festival = await findFestivalById(req.params.id);
        if (!festival) {
            return res.status(404).json({ message: "Festival not found" });
        }
        return res.status(200).json(festival);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

//********** Get Festival by title ************//
export async function getFestivalByTitleController(req, res) {
    try {
        const festival = await findFestivalByTitle(req.body.title);
        if (!festival) {
            return res.status(400).json({
                message: "Festival not found",
            });
        }
        return res.status(200).json(festival);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

//********** Delete Festival ************//
export async function deleteFestivalController(req, res) {
    try {
        const deleteFestival = await deleteFestivalById(req.params.id);
        if (!deleteFestival) {
            return res.status(400).json({ message: "Festival not found" });
        }

        return res.status(200).json({
            message: "Festival successfully deleted",
            festival: deleteFestival,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Sever error",
            error: error.message,
        });
    }
}

//********** Update Festival ************//

export async function updateFestivalController(req, res) {
    try {
        const updateData = req.body;
        const updateFestival = await findFestivalByIdAndUpdate(
            req.params.id,
            updateData
        );
        if (!updateFestival) {
            return res.status(400).json({
                message: "Festival not found",
            });
        }
        return res.status(200).json({
            message: "Festival successfully updated",
            festival: updateFestival,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}
