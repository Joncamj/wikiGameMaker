import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createCharacter.css";

export default function CreateCharacter() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    description: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("characters")) || [];

    saved.unshift(form);
    localStorage.setItem("characters", JSON.stringify(saved));

    navigate("/characters");
  };

  return (
    <div className="create-page">
      <h2 className="create-title">Créer un personnage</h2>

      <form className="create-form" onSubmit={handleSubmit}>
        <label>Nom</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Âge</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} required />

        <label>Description physique</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />

        <button type="submit" className="create-submit-btn">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
