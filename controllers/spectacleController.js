import { addSpectacle, deleteSpectacleById, getAllSpectacles, updateSpectacleById, getOneSpectacleById} from "../models/spectacle.js";


// |||||||||||||||||||||||||||||||| GET |||||||||||||||||||||||||||
export async function getAllSpectaclesController(req, res) {

    try {
        const { title} = req.query;
        const spectacle = await getAllSpectacles(title);

        return res.status(200).json( spectacle );
    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}
// |||||||||||||||||||||||||||||||| POST |||||||||||||||||||||||||||
export async function postAddSpectacleController(req, res) {

    try {
        const { title, description, date, price, place, duration } = req.body;
        const newSpectacle = await addSpectacle(title, description, date, price, place, duration);

        if(!newSpectacle){
            return res.status(400).json({message: "Votre spectacle n'a pas été trouvé"});
        }
        return res.status(201).json({ message: "Votre spectacle a bien été ajouté" });

    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}

// |||||||||||||||||||||||||||||||| DELETE |||||||||||||||||||||||||||

export async function deleteSpectacleByIdController(req, res) {
    try {
        const {id} = req.params;

        const deleted = await deleteSpectacleById(id);

        if (!deleted){
            return res.status(404).json({ message: "Votre spectacle est introuvable" });
        }
        return res.status(200).json({ message: "Votre spectacle a bien été supprimé" });
    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}
// |||||||||||||||||||||||||||||||| UPDATE |||||||||||||||||||||||||||

export async function updateSpectacleByIdController(req, res) {
    try{
        const{id}= req.params;
        const data = req.body;

        const updatedSpectacle = await updateSpectacleById(id, data);

        if(!updatedSpectacle){
            return res.status(404).json({message : "Séance introuvable"})
        }
        return res.status(200).json({message: "Séance a été mise à jour", spectacle: updatedSpectacle});
    }catch(error){
        return res.status(500).json({message: "Erreur de serveur lors de la mise à jour"});
    }
    }

// |||||||||||||||||||||||||||||||| GETONE |||||||||||||||||||||||||||
export async function getOneSpectacleByIdController(req,res){
    try{
    const {id} = req.params;
    const spectacleFound = await getOneSpectacleById(id);

    if (!spectacleFound){
        return res.status(404).json({message: "Le spectacle n'a pas été trouvé" });
    }
    return res.status(200).json({message: "Voici le spectacle : ", spectacleFound});
    }catch(error){
        res.status(404).json({message : "Erreur de serveur"});
    }
}