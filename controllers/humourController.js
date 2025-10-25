import {
  addHumour,
  getAllHumour,
  getHumourById,
  deleteSpectacleHumour,
  modiferHumour,
} from "../models/humour.js";

export async function postAddSpectacleHumour(req, res) {
  //   console.log("=== POST /humour appelé ===");
  try {
    const { title, description, date, place, price, duration } = req.body;
    const newHumour = await addHumour(
      title,
      description,
      date,
      place,
      price,
      duration
    );
    return res.status(201).json({
      message: "Spectacle d'humour créé avec succès",
      humour: newHumour,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}
//méthode GET pour afficher tous les spectacles dans la BDD
export async function getAllSpectacleHumourController(req, res) {
  try {
    const allHumour = await getAllHumour();
    return res.status(200).json(allHumour);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode GET pour retrouver une pièce par son ID
export async function getHumourByIdController(req, res) {
  const id = req.params.id;
  try {
    const humour = await getHumourById(id);
    if (!humour) {
      return res.status(404).json({ message: "Spectacle introuvable" });
    }
    return res.status(200).json(humour);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur connexion serveur", erreur: error.message });
  }
}

//méthode DELETE pour suppression d'un spectacle par son ID
export async function deleteSpectacleHumourController(req, res) {
  const id = req.params.id;
  try {
    const humourSupprimee = await deleteSpectacleHumour(id);
    if (!humourSupprimee) {
      return res.status(404).json({ message: "Spectacle introuvable" });
    }
    return res
      .status(200)
      .json({ message: "Spectacle d'humour supprimé avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode PUT pour modifier et mettre à jour un spectavlce d'humour
export async function modifierHumourController(req, res) {
  const id = req.params.id;
  try {
    const updatedHumour = await modiferHumour(id, req.body);
    if (!updatedHumour) {
      return res
        .status(404)
        .json({ message: "Spectacle d'humour introuvable" });
    }
    return res
      .status(200)
      .json({ message: "Spectacle mis à jour", humour: updatedHumour });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}
