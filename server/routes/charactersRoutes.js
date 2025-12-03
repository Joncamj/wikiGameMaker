import express from "express";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Fake DB (à remplacer par ta DB réelle)
let characters = [];

router.get("/", authMiddleware, (req, res) => {
  res.json(characters);
});

router.post("/", authMiddleware, (req, res) => {
  const { name, age, description } = req.body;

  const newCharacter = {
    id: Date.now(),
    name,
    age,
    description
  };

  characters.unshift(newCharacter);
  res.json(newCharacter);
});

router.patch("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  characters = characters.map(c =>
    c.id === Number(id) ? { ...c, ...updates } : c
  );

  res.json({ success: true });
});

router.delete("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  characters = characters.filter(c => c.id !== Number(id));

  res.json({ success: true });
});

export default router;
