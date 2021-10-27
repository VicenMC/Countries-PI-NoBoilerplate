import { Link } from "react-router-dom";
import "./BotonCrear.css";

export default function CrearActividad() {
  return (
    <div className="buttonSpace">
      <Link to="/activity" className="activitySend">
        <button className="buttonCreate">Create a new activity</button>
      </Link>
    </div>
  );
}
