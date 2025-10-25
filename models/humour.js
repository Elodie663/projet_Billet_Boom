import mongoose from "mongoose";
const humourSchema = new mongoose.Schema(
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
export const Humour = mongoose.model("Humour", humourSchema);
//paramètre 1 = nom de la collection en BDD
//paramètre 2 = nom du schéma déclaré plus haut
//export = réutilisation dans d'autres fichiers

//pour créer un spectacle d'humour = create
export async function addHumour(
  title,
  description,
  date,
  place,
  price,
  duration
) {
  return await Humour.create({
    title,
    description,
    date,
    place,
    price,
    duration,
  });
}

//pour afficher tous les spectacles
export async function getAllHumour() {
  return await Humour.find();
}

//pour afficher par son ID =findById
export async function getHumourById(id) {
  return await Humour.findById(id);
}

//pour supprimer =findByIdAndDelete
export async function deleteSpectacleHumour(id) {
  return await Humour.findByIdAndDelete(id);
}
//pour modifier findByIdAndUpdate
export async function modiferHumour(id, humourData) {
  return await Humour.findByIdAndUpdate(id, humourData, { new: true });
}
