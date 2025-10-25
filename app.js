// app.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import cinemaRoute from "./routes/cinemaRoute.js";
import theatreRoute from "./routes/theatreRoute.js";
// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connexion à MongoDB
connectDB(); //

//route principale pour la page cinema
app.use("/cinema", cinemaRoute);

//route principale pour la page théâtre
app.use("/theatre", theatreRoute);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
