import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MostrarDetalles } from "../../store/actions/actions";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

export default function Details() {
  let { id: code } = useParams();
  let [id] = useState(code);
  //let idFinal = Object.values({id:code})
  const dispatch = useDispatch();
  const mostrardetalles = useSelector((state) => state.Details);

  useEffect(() => {
    dispatch(MostrarDetalles(id));
  }, [id, dispatch]);

  return (
    <div className="detailsContainer">
      <div className="detailsCard">
        <div className="countryInfo">
          <ul className="detailsList">
            <div className="cajaLista">
              <h2>Country information:</h2>
              <li className="listElement">
                Country code: {mostrardetalles.ID}
              </li>
              <li className="listElement">Name: {mostrardetalles.name}</li>
              <li className="listElement">Region: {mostrardetalles.region}</li>
              <li className="listElement">
                Subregion: {mostrardetalles.subregion}
              </li>
              <li className="listElement">
                Capital: {mostrardetalles.capital}
              </li>
              <li className="listElement">Area: {mostrardetalles.area} Kms.</li>
              <li className="listElement">
                Population: {mostrardetalles.population}{" "}
              </li>
            </div>
            <img className="detailedFlag" src={mostrardetalles.flag} alt="" />
          </ul>
        </div>
        <div className="actCont">
          <h2>Country Activities:</h2>
          {mostrardetalles.Activities && mostrardetalles.Activities.length ? (
            mostrardetalles.Activities.map((a) => (
              <div className="detailsActivities" key={a.id}>
                <details className="details" key={a.id}>
                  <summary>
                    Activity: <span>{a.nombre} </span>{" "}
                  </summary>
                  <ul className="detailsActivity">
                    <li className="listActivity">
                      <li className="listP"> 
                        Duration: {""} {a.duration} Hr(s).
                      
                      </li>
                      <li className="listP">
                        Difficulty: {""}  {a.difficulty}
                      </li>
                      <li className="listP">
                        Season: {""} {a.season}
                      </li>
                    </li>
                  </ul>
                </details>
              </div>
            ))
          ) : (
            <span>No activities yet</span>
          )}
        </div>
        <div>
          <Link className="linkReturn" to="/home">
            <button className="buttonLoL">Return to Main Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
