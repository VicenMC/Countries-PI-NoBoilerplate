import React from "react";
import { useSelector } from "react-redux";
import "./BotonActividades.css";

//Llamamos al archivo api creado con axios

export default function BotonActividades({ Actividades, FiltradoActividades }) {
  const a = useSelector((state) => state.Actividades);
  console.log(a);
  return (
    <div>
      <select
        className="selectOp"
        defaultValue={"DEFAULT"}
        onChange={(e) => FiltradoActividades(e.target.value)}
      >
        <option className="selectFop">Sort by activity!</option>
        {a && a.length &&
          a.map((item, index) => {
          return (
            <option className="selectFop" key={index} value={item.id}>
              {item.nombre}
            </option>
          );
        })}
      </select>
    </div>
  );
}
