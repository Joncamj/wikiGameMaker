import express from "express";
import "dotenv/config";
import pool from "./config/db.js";
import usersRoutes from './routes/userRoutes.js'
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:5173",
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  exposedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  credentials: true,
  preflightContinue: true,
 }));
app.use(express.json());

app.set('views', './views')

app.use('/auth', usersRoutes)


//Test de connexion
app.get("/", (req, res) => {
  res.send("API opérationnelle !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});