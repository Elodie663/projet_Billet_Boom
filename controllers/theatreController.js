import {
  addTheatre,
  getAllPieces,
  getPieceById,
  deletePieceTheatre,
  modifierPiece,
} from "../models/theatre.js";

export async function postAddPieceTheatre(req, res) {
  try {
    const { title, description, date, place, price, duration } = req.body;
    const newTheatre = await addTheatre(
      title,
      description,
      date,
      place,
      price,
      duration
    );
    return res.status(201).json({
      message: "Pièce(s) de théâtre créée(s) avec succès",
      theatre: newTheatre,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode GET pour afficher toutes les pièces de théâtre dans la BDD
export async function getAllPiecesController(req, res) {
  try {
    const allPieces = await getAllPieces();
    return res.status(200).json(allPieces);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}
//méthode GET pour retrouver une pièce par son ID
export async function getPieceByIdController(req, res) {
  const id = req.params.id;
  try {
    const theatre = await getPieceById(id);
    if (!theatre) {
      return res.status(404).json({ message: "Pièce de théâtre introuvable" });
    }
    return res.status(200).json(theatre);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur connexion serveur", erreur: error.message });
  }
}

//méthode DELETE pour suppression d'une pièce par son ID
export async function deletePieceTheatreController(req, res) {
  const id = req.params.id;
  try {
    const pieceSupprimee = await deletePieceTheatre(id);
    if (!pieceSupprimee) {
      return res.status(404).json({ message: "Pièce de théâtre introuvable" });
    }
    return res
      .status(200)
      .json({ message: "Pièce de théâtre supprimée avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//méthode PUT pour modifier et mettre à jour une pièce de théâtre
export async function modifierPieceController(req, res) {
  const id = req.params.id;
  try {
    const updatedPiece = await modifierPiece(id, req.body);
    if (!updatedPiece) {
      return res.status(404).json({ message: "Pièce de théâtre introuvable" });
    }
    return res
      .status(200)
      .json({ message: "Pièce de théâtre mise à jour", piece: updatedPiece });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}
