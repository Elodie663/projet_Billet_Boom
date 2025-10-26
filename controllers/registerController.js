// import { findUserByEmail, createUser } from "../models/user.js";
// import bcrypt from "bcrypt"; // executer dans terminal => npm install mongoose bcrypt

// export async function registerController(req, res) {
//     try {
//         const name = req.body.name;
//         const email = req.body.email;
//         const password = req.body.password;

//         //email
//         const passwordRegex =
//             /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

//         if (!passwordRegex.test(password)) {
//             return res.status(400).json({
//                 message:
//                     "Invalid password. It must be 7-15 characters long, include at least one digit and one special character (!@#$%^&*), and contain only allowed characters.",
//             });
//         }

//         //verif user si existe
//         const existUser = await findUserByEmail(email);
//         if (existUser) {
//             return res.status(400).json({ message: "Email already exists" });
//         }

//         //hashPW
//         const passwordHash = await bcrypt.hash(password, 10); //10=> nombre de tour de salt, comme un degisment differant a chaque mot de passe, meme si 2 personne a le meme mdp, ca va etre differant

//         // create user
//         const newUser = await createUser(name, email, passwordHash);

//         return res.status(201).json({ message: "User successfully created" });
//     } catch (error) {
//         return res
//             .status(500)
//             .json({ message: "Erreur serveur", erreur: error.message });
//     }
// }
