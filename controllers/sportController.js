import {
    addSport,
    deleteSportById,
    getAllSports,
    updateSportById,
    getOneById,
} from "../models/sport.js";

// |||||||||||||||||||||||||||||||| GET ALL |||||||||||||||||||||||||||
export async function getAllSportsController(req, res) {
  console.log("🎯 [GET /sport] Route appelée !");

  try {
    const sports = await getAllSports();
    console.log("✅ [GET /sport] Données reçues :", sports);

    return res.status(200).json(sports);
  } catch (error) {
    console.error("❌ [GET /sport] Erreur :", error);
    return res.status(500).json({
      message: "Erreur serveur lors de la récupération des sports",
      error: error.message,
    });
  }
}

// |||||||||||||||||||||||||||||||| POST |||||||||||||||||||||||||||
export async function postAddSportController(req, res) {
    try {
        const { title, description, date, price, place, duration } = req.body;
        const newSport = await addSport(
            title,
            description,
            date,
            price,
            place,
            duration
        );

        return res
            .status(201)
            .json({ message: "Votre séance de sport a bien été ajoutée", newSport });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur lors de l’ajout du sport",
            error: error.message,
        });
    }
}

// |||||||||||||||||||||||||||||||| DELETE |||||||||||||||||||||||||||
export async function deleteSportByIdController(req, res) {
    try {
        const { id } = req.params;

        const deleted = await deleteSportById(id);

        if (!deleted) {
            return res
                .status(404)
                .json({ message: "Votre séance de sport est introuvable" });
        }

        return res
            .status(200)
            .json({ message: "Votre séance de sport a bien été supprimée" });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur lors de la suppression du sport",
            error: error.message,
        });
    }
}

// |||||||||||||||||||||||||||||||| UPDATE |||||||||||||||||||||||||||
export async function updateSportByIdController(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedSport = await updateSportById(id, data);

        if (!updatedSport) {
            return res.status(404).json({ message: "Séance introuvable" });
        }

        return res
            .status(200)
            .json({ message: "Séance mise à jour", sport: updatedSport });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur lors de la mise à jour",
            error: error.message,
        });
    }
}

// |||||||||||||||||||||||||||||||| GET ONE |||||||||||||||||||||||||||
export async function getOneByIdController(req, res) {
    try {
        const { id } = req.params;
        const sportFound = await getOneById(id);

        if (!sportFound) {
            return res.status(404).json({ message: "Le sport n'a pas été trouvé" });
        }

        return res.status(200).json(sportFound);
    } catch (error) {
        res.status(500).json({
            message: "Erreur serveur lors de la récupération du sport",
            error: error.message,
        });
    }
}
