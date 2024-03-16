import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="aparment image" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <p>Bedroom {item.bedroom}</p>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
