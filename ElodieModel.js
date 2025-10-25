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

//pour ajouter
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


le controller:
import { addCinema } from "../models/cinema.js";

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