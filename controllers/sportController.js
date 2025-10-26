import { addSport, deleteSportById, getAllSports, updateSportById, getOneById} from "../models/sport.js";


// |||||||||||||||||||||||||||||||| GET |||||||||||||||||||||||||||
export async function getAllSportsController(req, res) {

    try {
        const { title} = req.query;
        const sports = await getAllSports(title);

        return res.status(200).json( sports );
    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}
// |||||||||||||||||||||||||||||||| POST |||||||||||||||||||||||||||
export async function postAddSportController(req, res) {

    try {
        const { title, description, date, price, place, duration } = req.body;
        const newSport = await addSport(title, description, date, price, place, duration);

        return res.status(201).json({ message: "Votre séance de sport a bien été ajouté" });

    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}

// |||||||||||||||||||||||||||||||| DELETE |||||||||||||||||||||||||||

export async function deleteSportByIdController(req, res) {
    try {
        const {id} = req.params;

        const deleted = await deleteSportById(id);

        if (!deleted){
            return res.status(404).json({ message: "Votre séance de sport est introuvable" });
        }
        return res.status(200).json({ message: "Votre séance de sport a bien été supprimé" });
    } catch (error) {
        return res.status(500).json({ message: "Vous avez un probleme de serveur", error: error.message });
    }
}
// |||||||||||||||||||||||||||||||| UPDATE |||||||||||||||||||||||||||

export async function updateSportByIdController(req, res) {
    try{
        const{id}= req.params;
        const data = req.body;

        const updatedSport = await updateSportById(id, data);

        if(!updatedSport){
            return res.status(404).json({message : "Séance introuvable"})
        }
        return res.status(200).json({message: "Séance a été mise à jour", sport: updatedSport});
    }catch(error){
        return res.status(500).json({message: "Erreur de serveur lors de la mise à jour"});
    }
    }

// |||||||||||||||||||||||||||||||| GETONE |||||||||||||||||||||||||||
export async function getOneByIdController(req,res){
    try{
    const {id} = req.params;
    const sportFound = await getOneById(id);

    if (!sportFound){
        return res.status(404).json({message: "Le sport n'a pas été trouvé" });
    }
    return res.status(200).json({message: "Voici le sport : ", sportFound});
    }catch(error){
        res.status(404).json({message : "Erreur de serveur"});
    }
}