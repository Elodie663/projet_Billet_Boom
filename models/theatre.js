import mongoose from "mongoose";
const theatreSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);
//RAPPEL => méthode mongoose qui crée un modèle à partir d'un schéma.
export const Theatre = mongoose.model("Theatre", theatreSchema);
//paramètre 1 = nom de la collection en BDD
//paramètre 2 = nom du schéma déclaré plus haut
//export = réutilisation dans d'autres fichiers

//pour créer une pièce de théêtre
//cette fois j'utilise create et pas save car je ne fais que créer et je pourrais créer plusieurs pièces en même temps
export async function addTheatre(
  title,
  description,
  date,
  place,
  price,
  duration
) {
  return await Theatre.create({
    title,
    description,
    date,
    place,
    price,
    duration,
  });
}

//pour afficher toutes les pièces de théâtre
export async function getAllPieces() {
  return await Theatre.find();
}

//pour afficher une pièce de théâtre par son ID:méthode Mongoose findById()
export async function getPieceById(id) {
  return await Theatre.findById(id);
}

//pour supprimer une pièce par don IDméthode mongoose finfByIdAndDelete()
export async function deletePieceTheatre(id) {
  return await Theatre.findByIdAndDelete(id);
}
//pour modifier une pièce :méthode mongoose findByIdAndUpdate()
export async function modifierPiece(id, pieceData) {
  return await Theatre.findByIdAndUpdate(id, pieceData, { new: true });
}
