import React from "react";
import "./characterCard.css";

export default function CharacterCard({ data }) {
  return (
    <div className="character-card">
      <h3>{data.name}</h3>
      <p><strong>Âge :</strong> {data.age}</p>
      <p className="description">{data.description}</p>
    </div>
  );
}
