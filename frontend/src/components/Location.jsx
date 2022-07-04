import React, { useState, useEffect } from "react";
import { Popup, Marker, useMap, Circle } from "react-leaflet";
import L, { latLng } from "leaflet";
import axios from "axios";

const Location = ({ position, setPosition }) => {
  const map = useMap();

  const AddLocation = (position) => {
    console.log(position);
    // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
    const location = new URLSearchParams({
      longitude: position.lng,
      latitude: position.lat,
    });
    console.log(location);
    location.append("extraparam", "value");
    axios
      .post(`https://free-duck-finder.herokuapp.com/api/ducks`, location)
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    map.locate({
      setView: true,
    });
    map.on("locationfound", (event) => {
      setPosition(event.latlng);
    });
  }, [map]);

  return position ? (
    <>
      <Marker
        position={position}
        draggable
        autoPan
        eventHandlers={{
          moveend(e) {
            const { lat, lng } = e.target.getLatLng();
            setPosition(e.target.getLatLng());
            console.log(position);
          },
        }}
      >
        <Popup>
          <button onClick={() => AddLocation(position)}>
            Add this location
          </button>{" "}
          or drag marker to choose.
        </Popup>
      </Marker>
    </>
  ) : null;
};

export default Location;
