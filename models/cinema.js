import mongoose from "mongoose";
const cinemaSchema = new mongoose.Schema(
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

export const Cinema = mongoose.model("Cinema", cinemaSchema);

//création des fonctions assynchrones car communication avec une BDD

//pour ajouter une séance de cinéma
export async function addCinema(
  title,
  description,
  date,
  place,
  price,
  duration
) {
  const newCinema = new Cinema({
    title,
    description,
    date,
    place,
    price,
    duration,
  });
  return await newCinema.save();
}

//pour afficher toutes les séances de cinéma
export async function getAllSeances() {
  return await Cinema.find();
}

//pour retrouver un séance de cinéma par son ID : méthode Mongoose findById()
export async function getSeanceById(id) {
  return await Cinema.findById(id);
}

//pour supprimer une séance par son ID : méthode mongoose finfByIdAndDelete()
export async function deleteSeanceCinema(id) {
  return await Cinema.findByIdAndDelete(id);
}

//pour modifier une séance de cinéma avec la méthode mongoose findByIdAndUpdate()
export async function modifierSeance(id, seanceData) {
  return await Cinema.findByIdAndUpdate(id, seanceData, { new: true });
}
