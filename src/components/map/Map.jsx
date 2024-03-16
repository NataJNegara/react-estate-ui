import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

export default function Map({ items }) {
  const position = [53.483959, -2.244644];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={true}
      //   style={{ width: "100%", height: "100vh" }}
      className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*  */}
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}
