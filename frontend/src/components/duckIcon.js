import L from "leaflet";

const duckIcon = new L.Icon({
  iconUrl: require("./duckMarker.png"),
  iconRetinaUrl: require("./duckMarker.png"),
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 41),
  className: "",
});

export { duckIcon };
