import mongoose from "mongoose";

const { Schema, model } = mongoose;
const festivalSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        place: { type: String, required: true },
        schedule: [
            {
                time: { type: Date, required: true },
                activity: { type: String, required: true },
            },
        ],

        duration: { type: String, required: true },
        price: { type: Number, required: true },

        quantity: { type: Number },
    },
    { timestamps: true }
);

const Festival = model("festival", festivalSchema);
export default Festival;

export async function getAllFestival() {
    return await Festival.find();
}

export async function addFestival(
    title,
    description,
    date,
    place,
    schedule,
    duration,
    price,
    quantity
) {
    const newFestival = new Festival({
        title,
        description,
        date,
        place,
        schedule,
        duration,
        price,
        quantity,
    });
    return await newFestival.save();
}
export async function findFestivalById(id) {
    return await Festival.findById(id);
}

export async function findFestivalByTitle(title) {
    const regexTitle = { title: { $regex: title, $option: "i" } }; //=> $regex: recherche avec mot cle  // $option:"i"=> peu importe majuscule, minuscule
    return await Festival.findOne(regexTitle);
}

export async function deleteFestivalById(id) {
    return await Festival.findByIdAndDelete(id);
}

export async function findFestivalByIdAndUpdate(id, updateData) {
    return await Festival.findByIdAndUpdate(id, updateData, { new: true });
}
