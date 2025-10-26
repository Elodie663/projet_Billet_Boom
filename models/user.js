import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, //supprimer les espaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, //convertir en minuscule
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
    createdAt: {
        type: Date,
        default: Date.now, //date de creation automatique
    },
});

const User = model("User", userSchema);
export default User;

export async function findUserByEmail(email) {
    return await User.findOne({ email });
}

export async function createUser(name, email, passwordHash) {
    const newUser = new User({ name, email, password: passwordHash });
    return await newUser.save();
}
export async function findUserById(id) {
    return await User.findById(id);
}
