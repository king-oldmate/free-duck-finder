import React, { useState, useEffect } from "react";

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
      {coordinate.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default App;
