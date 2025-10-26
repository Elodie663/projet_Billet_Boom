import mongoose from "mongoose";

const spectacleSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        price: { type: Number, required: true },
        place: { type: String, required: true },
        duration: { type: String, required: true }
    },
);

export const spectacle = mongoose.model("spectacle", spectacleSchema);

//|||||||||||||||||||||||GETALL||||||||||||||||||||||||-
export async function getAllSpectacles(title){
const list = await spectacle.find();
return list;
}

//|||||||||||||||||||||||ADD||||||||||||||||||||||||-

export async function addSpectacle(title, description, date, price, place, duration) {
    const newSpectacle = new spectacle({ title, description, date, price, place, duration });
    return await newSpectacle.save();
}

//|||||||||||||||||||||||DELETE||||||||||||||||||||||||-

export async function deleteSpectacleById(id) {
    const result = await spectacle.deleteOne({id});
    return result;
}

//|||||||||||||||||||||||||UPDATE|||||||||||||||||||||||||

export async function updateSpectacleById(id, data){
    const updatedSpectacle = await spectacle.findByIdAndUpdate(id, data, {new:true, runValidators: true});
    return updatedSpectacle;
}

//|||||||||||||||||||||||||GETONE|||||||||||||||||||||||||

export async function getOneSpectacleById(id){
    const spectacle = await spectacle.findById({id});
    return spectacle;
}
