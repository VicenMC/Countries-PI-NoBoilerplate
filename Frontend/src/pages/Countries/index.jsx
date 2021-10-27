import React, { useState } from "react";
//Llamamos al archivo api creado con axios
import api from "../../services/api";

//React tiene jsx, una forma de que react represente los elementos
//Todo lo que está despues del return será renderizado en la página
//Agregamos el argumento history, el router nos lo va a pasar (?)
export default function Countries({ history }) {
  //Ademas de esos datos, tenemos que agregar First y Last name
  const [ID, setID] = useState("");
  const [nombre, setNombre] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await api.post(`/activity`, { ID, nombre, difficulty, duration, season });
    //Este objeto va a traer la información registrada
  };
  //Modificamos para agregar los espacios de registro de nombre
  return (
    <div>
      <h2>Register</h2>
      <p>
        <strong>Register a new activity</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Activity Name"
            onChange={(evt) => setNombre(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="Dificultad"
            placeholder="1 - 5"
            onChange={(evt) => setDifficulty(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="Duración"
            placeholder="Duration"
            onChange={(evt) => setDuration(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="Temporada"
            placeholder="Season"
            onChange={(evt) => setSeason(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="paises"
            placeholder="Countries"
            onChange={(evt) => setID(evt.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
