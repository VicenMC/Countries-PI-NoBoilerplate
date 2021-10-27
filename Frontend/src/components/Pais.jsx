import React from "react";
import { Link } from "react-router-dom";
import "./Pais.css";
export default function Pais({ ID, name, region, flag, capital, area }) {
  return (
    <div className="showContainer">
      <div className="showCards">
        <div className="image">
          <img className="flagImage" src={flag} alt="" />
        </div>
        <div className="countryName">
          <p>Name: {name} {ID}</p>
          <p>Region: {region}</p>
          <p>Area: {area} Km2</p>
        </div>

        <Link className="buttonDetails" to={`details/${ID}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
