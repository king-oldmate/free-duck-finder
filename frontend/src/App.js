import React, { useState, useEffect } from "react";
import MapView from "./components/MapView";
import "mapbox-gl/dist/mapbox-gl.css";

console.log(process.env.REACT_APP_TOKEN);

const App = () => {
  const [coordinate, setCoordinate] = useState([]);

  useEffect(() => {
    let locations;
    fetch("http://localhost:5000/api/ducks")
      .then((response) => response.json())
      .then((data) => (locations = getLocations(data)))
      .then((locations) => setCoordinate(locations));
  }, []);

  function getLocations(data) {
    let locationsList = data.map((item) => {
      return item.location;
    });
    return locationsList;
  }

  return (
    <div>
      <MapView />
      {coordinate.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default App;
