import React, { useState, useEffect } from "react";
import { Popup, Marker, useMap, Circle } from "react-leaflet";
import L, { latLng } from "leaflet";

const Location = ({ position, setPosition }) => {
  const map = useMap();

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
          lat: {position.lat}, lng: {position.lng}
        </Popup>
      </Marker>
    </>
  ) : null;
};

export default Location;
