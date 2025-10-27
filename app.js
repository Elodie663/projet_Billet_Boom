// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/database.js";
import sportRoute from "./routes/sportRoute.js";
import spectacleRoute from "./routes/spectacleRoute.js";
import cinemaRoute from "./routes/cinemaRoute.js";
import theatreRoute from "./routes/theatreRoute.js";
import humourRoute from "./routes/humourRoute.js";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import concertRoute from "./routes/concertRoute.js";
import festivalRoute from "./routes/festivalRoute.js";

// Charger les variables d'environnement
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
connectDB(); //

//route principale pour la page cinema
app.use("/cinema", cinemaRoute);

//route principale pour la page théâtre
app.use("/theatre", theatreRoute);

//route principale pour les spectacles d'humour
app.use("/humour", humourRoute);

// route vers les services register et login
app.use("/auth", authRoute);

//route principale vers le user
app.use("/users", usersRoute);

app.use("/sport", sportRoute);
app.use("/spectacle", spectacleRoute);

app.use("/concert", concertRoute);
app.use("/festival", festivalRoute);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
