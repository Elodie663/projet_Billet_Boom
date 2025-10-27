import mongoose from "mongoose";

const sportSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        price: { type: Number, required: true },
        place: { type: String, required: true },
        duration: { type: String, required: true }
    },
);

export const Sport = mongoose.model("Sport", sportSchema);

//|||||||||||||||||||||||GETALL||||||||||||||||||||||||-
export async function getAllSports(title){
const list = await Sport.find();
return list;
}

//|||||||||||||||||||||||ADD||||||||||||||||||||||||-

export async function addSport(title, description, date, price, place, duration) {
    const newSport = new Sport({ title, description, date, price, place, duration });
    return await newSport.save();
}

//|||||||||||||||||||||||DELETE||||||||||||||||||||||||-

export async function deleteSportById(id) {
    const result = await Sport.findByIdAndDelete(id);
    return result;
}

//|||||||||||||||||||||||||UPDATE|||||||||||||||||||||||||

export async function updateSportById(id, data){
    const updatedSport = await Sport.findByIdAndUpdate(id, data, {new:true, runValidators: true});
    return updatedSport;
}

//|||||||||||||||||||||||||GETONE|||||||||||||||||||||||||

export async function getOneById(id){
    const sport = await Sport.findById(id);
    return sport;
}
