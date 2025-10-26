import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;
//ajout du schéma utilisateur créé par Eszter
const userSchema = new Schema(
  {
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
  },
  {
    timestamps: true, // date de creation automatique (createdAt et updatedAt)
  }
);

const User = model("User", userSchema);

export default User;

//ajout du register d'Eszter
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

//tests pour ma partie login
// export async function findUserByEmail(email) {
//   return await Users.findOne({ email });
// }

export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

//fin du crud user
export async function getAllUsers() {
  return await User.find();
}

export async function updateUser(id, userData) {
  return await User.findByIdAndUpdate(id, userData, { new: true });
}

export async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}
