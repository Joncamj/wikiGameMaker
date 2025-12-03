import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("characters")) || [];
    setCharacters(saved);
  }, []);

  const deleteCharacter = (index) => {
    const updated = characters.filter((_, i) => i !== index);
    setCharacters(updated);
    localStorage.setItem("characters", JSON.stringify(updated));
  };

  return (
    <div className="characters-page">
      <h1>Mes Personnages</h1>

      <Link to="/characters/create" className="create-character-btn">
        + Créer un personnage
      </Link>

      <div className="characters-grid">
        {characters.length === 0 ? (
          <p></p>
        ) : (
          characters.map((char, index) => (
            <div className="character-card" key={index}>
              <h2>{char.name}</h2>
              <p><strong>Âge :</strong> {char.age}</p>
              <p><strong>Description :</strong> {char.description}</p>

              <button
                className="delete-card-btn"
                onClick={() => deleteCharacter(index)}
              >
                Supprimer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
