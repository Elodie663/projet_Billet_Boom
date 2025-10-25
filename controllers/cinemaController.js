import {
  addCinema,
  getSeanceById,
  deleteSeanceCinema,
  modifierSeance,
  getAllSeances,
} from "../models/cinema.js";

//méthode post pour ajouter un spectacle = séance de cinéma

export async function postAddSeanceCinema(req, res) {
  try {
    const { title, description, date, place, price, duration } = req.body;
    const newCinema = await addCinema(
      title,
      description,
      date,
      place,
      price,
      duration
    );
    return res.status(201).json({
      message: "Séance de cinéma créée avec succès",
      cinema: newCinema,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode GET pour récupérer toutes les séances de ciné
export async function getAllSeancesController(req, res) {
  try {
    const allSeances = await getAllSeances();
    return res.status(200).json(allSeances);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode get pour retrouver une séance de ciné par son ID

export async function getSeanceByIdController(req, res) {
  const id = req.params.id;

  try {
    const cinema = await getSeanceById(id);
    if (!cinema) {
      return res.status(404).json({ message: "Séance introuvable" });
    }
    return res.status(200).json(cinema);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur connexion serveur", erreur: error.message });
  }
}

//méthode delete pour supprimer une séance par son ID
export async function deleteSeanceCinemaController(req, res) {
  const id = req.params.id;
  try {
    const seanceSupprimee = await deleteSeanceCinema(id);
    if (!seanceSupprimee) {
      return res.status(404).json({ message: "séance introuvable" });
    }
    return res.status(200).json({ message: "séance supprimée avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode PUT pour modifier et mettre à jour une séance de cinéma
export async function modifierSeanceController(req, res) {
  const id = req.params.id;
  try {
    const updatedSeance = await modifierSeance(id, req.body);

    if (!updatedSeance) {
      return res.status(404).json({ message: "Séance introuvable" });
    }
    return res
      .status(200)
      .json({ message: "Séance mis à jour", seance: updatedSeance });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}
