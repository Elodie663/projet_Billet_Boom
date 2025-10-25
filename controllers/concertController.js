import Concert, {
    addConcert,
    findConcertById,
    findConcertByIdAndUpdate,
} from "../models/concert.js";

//********** GetAll ************//
export async function getAllConcertController(req, res) {
    try {
        const allConcert = await Concert.find();
        if (allConcert.length === 0) {
            return res.status(404).json({ message: "No concert found" });
        }
        res.status(200).json(allConcert);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}

//********** Add New Concert ************//

export async function addConcertController(req, res) {
    try {
        const { title, description, date, place, duration, price } = req.body;
        const newConcert = await addConcert(
            title,
            description,
            date,
            place,
            duration,
            price
        );
        return res.status(201).json({
            message: "Concert successfully create",
            concert: newConcert,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

//********** Delete Concert ************//
export async function deleteConcertController(req, res) {
    try {
        const deletedConcert = await findConcertById(req.params.id);
        if (!deletedConcert) {
            return res.status(400).json({ message: "Concert not found" });
        }

        return res
            .status(200)
            .json({ message: "Concert successfully deleted" });
    } catch (error) {
        return res.status(500).json({
            message: "Sever error",
            error: error.message,
        });
    }
}

//********** Update Concert ************//
export async function updateConcertController(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updateConcert = await findConcertByIdAndUpdate(id, updateData);

        if (!updateConcert) {
            return res.status(400).json({
                message: "Concert not found",
            });
        }

        return res
            .status(200)
            .json({ message: "Concert successfully updated" });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}
