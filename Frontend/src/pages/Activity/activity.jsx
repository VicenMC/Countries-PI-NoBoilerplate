import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Mostrar } from "../../store/actions/actions";
//Llamamos al archivo api creado con axios
import "./activity.css";
import axios from 'axios';

//React tiene jsx, una forma de que react represente los elementos
//Todo lo que está despues del return será renderizado en la página
//Agregamos el argumento history, el router nos lo va a pasar (?)

//Esto iba en la linea 84
//<select onChange={evt=>setID(oldGenre => [...oldGenre, evt.target.value])}>

function validation({ID, nombre, difficulty, duration, season}){
let errors = {};
if(!ID[0]){
  errors.ID = 'Country data required'
}if(!nombre){
  errors.nombre = 'Name data required'
}if(!difficulty){
  errors.difficulty = 'Difficulty data required'
}if(!duration){
  errors.duration = 'Duration data required'
}if(!season){
  errors.season = 'Season data required'
}
return errors;
}

export default function Activity({ history }) {

  const [errors, setErrors] = useState({});
  const [ID, setID] = useState([]);
  const [nombre, setNombre] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");

  const dispatch = useDispatch();
  const paises = useSelector((state) => state.Paises);
  useEffect(() => {
    dispatch(Mostrar());
  }, [dispatch]);

  //{Paises &&Paises.map((item) => {
  // return <option value={item.id}>{item.name}</option>;
  //})}


  const handleSubmit = async (evt) => {
    evt.preventDefault(); //No sé reinicia el estado 
    setErrors(validation({ID, nombre, difficulty, duration, season}))
    let eventError = validation({ID, nombre, difficulty, duration, season});
    if(Object.values(eventError).length === 0){
    try {
      await 
        axios.post(`/activity`, { ID, nombre, difficulty, duration, season })
        .then((response) => {
          alert("Your activity has been created");
          document.activityForm.reset();
        });
        setID([])
    } catch (e) {
      console.log("Error" + e);
    }
  }

  };

  return (
    <div className="generalContainer">
      <div className="form">
        <form
        name="activityForm"
          className="formContainer"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="mainText">New activity form</h2>
          <div className="form-group">
            <input
              className="selector"
              type="text"
              name="nombre"
              placeholder="Activity name"
              onChange={(evt) => setNombre(evt.target.value)}
            />
            <p className="errorMessage">{errors.nombre}</p>
            <div className="form-group">
            <select
                className="selectOp"
                defaultValue={"DEFAULT"}
                name="Difficulty"
                onChange={(evt) => setDuration(evt.target.value)}
              >
                <option className="elemSelect" value="DEFAULT" disabled>
                  Duration 
                </option>
                <option className="elemSelect" value="1" type="integer">
                  1 Hr.
                </option>
                <option className="elemSelect" value="2">
                  2 Hrs. 
                </option>
                <option className="elemSelect" value="3">
                  3 Hrs.
                </option>
                <option className="elemSelect" value="4">
                  4 Hrs.
                </option>
                <option className="elemSelect" value="5">
                  5 Hrs.
                </option>
              </select>
              <p className="errorMessage">{errors.duration}</p>
            </div>
          </div>
          <div className="optionsContainer">
            <div className="form-group-op">
              <select
                className="selectOp"
                defaultValue={"DEFAULT"}
                name="Difficulty"
                onChange={(evt) => setDifficulty(evt.target.value)}
              >
                <option className="elemSelect" value="DEFAULT" disabled>
                  Difficulty
                </option>
                <option className="elemSelect" value="1" type="integer">
                  1
                </option>
                <option className="elemSelect" value="2">
                  2
                </option>
                <option className="elemSelect" value="3">
                  3
                </option>
                <option className="elemSelect" value="4">
                  4
                </option>
                <option className="elemSelect" value="5">
                  5
                </option>
              </select>
              <p className="errorMessage">{errors.difficulty}</p>
            </div>

            <div className="form-group-op">
              <select
                className="selectOp"
                defaultValue={"DEFAULT"}
                name="Season"
                onChange={(evt) => setSeason(evt.target.value)}
              >
                <option className="elemSelect" value="DEFAULT" disabled>
                  Season
                </option>
                <option className="elemSelect" value="Spring">
                  Spring
                </option>
                <option className="elemSelect" value="Summer">
                  Summer
                </option>
                <option className="elemSelect" value="Autumn">
                  Autumn
                </option>
                <option className="elemSelect" value="Winter">
                  Winter
                </option>
              </select>
              <p className="errorMessage">{errors.season}</p>
            </div>
          </div>

          <select
            className="selectOp"
            onChange={(evt) =>
              setID((newCoutry) => [...newCoutry, evt.target.value])
            }
          >
            <option value={ID}>Country</option>
            {paises &&
              paises.map((item) => {
                return (
                  <option
                    className="elemSelect"
                    key={item.name}
                    value={item.ID}
                  >
                    {item.name}
                  </option>
                );
              })}
          </select>
          <div className="selectCountriesContainer">
          {ID.map((e, index) => {
            return(
              <p key={index} className="countriesCollection">{e}</p>)
          })}
          </div>
          <p className="errorMessage">{errors.ID}</p>
          <button className="submitButton">Submit</button>
          <p className="countriesCount">{ID.length} countries selected</p>
        </form>
      </div>

      <div>
        <Link className="buttonLink" to="/home">
          <button className="returnButton">Return to main page</button>
        </Link>
      </div>
    </div>
  );
}
