//userController qui gère la partie utulisateur hors login et register : suppression, modification et retrouver un user par son id
import {
  getAllUsers,
  findUserById,
  updateUser,
  deleteUser,
} from "../models/user.js";

//méthode get pour afficher tous les users
export async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

//méthode get pour trouver un user par son id
export async function getUserByIdController(req, res) {
  try {
    const user = await findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

//update de l'user avec put
export async function updateUserController(req, res) {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res
      .status(200)
      .json({ message: "Utilisateur modifié", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
}
//suppression de l'user avec delete
export async function deleteUserController(req, res) {
  try {
    const deletedUser = await deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
}
