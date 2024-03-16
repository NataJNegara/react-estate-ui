import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            incidunt rem placeat, expedita dolorem praesentium reiciendis! Velit
            quam modi sunt! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum, optio.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h2>5+</h2>
              <p>Year of experience</p>
            </div>
            <div className="box">
              <h2>10+</h2>
              <p>Year of experience</p>
            </div>
            <div className="box">
              <h2>5+</h2>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="hero image" />
      </div>
    </div>
  );
}
