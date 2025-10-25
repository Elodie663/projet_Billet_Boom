// app.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js"; // ← Import de ta fonction
import sportRoute from "./routes/sportRoute.js";




// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
connectDB(); // ← Appel de ta fonction

app.use("/sport", sportRoute);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
