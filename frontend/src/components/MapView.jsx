import React, { useState, useMemo } from "react";
import Map, { Marker } from "react-map-gl";
import pin from "./pin.png";

const MapView = () => {
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
        <Marker longitude={151.1} latitude={-33.6} anchor='bottom'>
          <img src={pin} width='10px' height='15px' />
        </Marker>
      </Map>
    </>
  );
};

export default MapView;
