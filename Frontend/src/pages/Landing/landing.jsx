import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landingContainer">
      <div className="landingCard">
        <h1 className="tittle">Countries - PI</h1>
        <div className="textContainer">
          <p className="paragraph">
            Welcome to my countries single page aplication, 
            on this website you can check principal information 
            about countries from all over the world!
          </p>
          <p className="paragraph">
            You can check wich countries have specific activities that you're interested
            in.
            </p>
            <p p className="paragraph">
            We also have an activity creation feature, so you can create your own
            activities and assign them to one or various countries.{" "}
          </p>
        </div>
        <img
          className="worldGif"
          src="https://i.pinimg.com/originals/11/b7/9e/11b79e852bd58eb35cb97dd01b0de23f.gif"
        alt=""
        />
        <Link to="/home" className="botonLink">
          <button className="botonMain">Go to main page</button>
        </Link>
      </div>
    </div>
  );
}
