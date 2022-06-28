import React, { useState, useMemo, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import pin from "./pin.png";

const MapView = () => {
  const [coordinateList, setCoordinateList] = useState([]);

  useEffect(() => {
    let ponds;
    fetch("http://localhost:5000/api/ducks")
      .then((response) => response.json())
      .then((data) => (ponds = getLocations(data)))
      .then((ponds) => setCoordinateList(ponds));
  }, []);

  function getLocations(data) {
    let pondList = data.map((pond) => {
      const pondCoordinates = [pond.longitude, pond.latitude];
      return pondCoordinates;
    });
    return pondList;
  }

  console.log(coordinateList);

  const pins = useMemo(
    () =>
      coordinateList.map((pond, index) => {
        const [longitude, latitude] = [pond[0], pond[1]];
        return (
          <Marker
            key={`marker-${index}`}
            longitude={longitude}
            latitude={latitude}
            anchor='bottom'
          >
            <img
              src={pin}
              width='10px'
              height='15px'
              alt={`${longitude}, ${latitude}`}
            />
          </Marker>
        );
      }),
    [coordinateList]
  );

  return (
    <>
      <Map
        initialViewState={{
          longitude: 151.1,
          latitude: -33.6,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={process.env.REACT_APP_TOKEN}
      >
        {/* get an array of locations and map through them to place multiple markers */}
        {pins}
      </Map>
    </>
  );
};

export default MapView;
