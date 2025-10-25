import mongoose from "mongoose";

const { Schema, model } = mongoose;
const concertSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        place: { type: String, required: true },
        duration: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

const Concert = model("concert", concertSchema);
export default Concert;

export async function addConcert(
    title,
    description,
    date,
    place,
    duration,
    price
) {
    const newConcert = new Concert({
        title,
        description,
        date,
        place,
        duration,
        price,
    });
    return await newConcert.save();
}

export async function findConcertById(id) {
    return await Concert.findById(id);
}

export async function findConcertByIdAndUpdate(id, updateData) {
    return await Concert.findByIdAndUpdate(id, updateData);
}
