import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  Circle,
} from "react-leaflet";
import L, { latLng } from "leaflet";
import axios from "axios";
import { duckIcon } from "./duckIcon";
import Location from "./Location";

const center = [-33, 151];

const MapComponent = () => {
  // GET request
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://free-duck-finder.herokuapp.com/api/ducks`
        );
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // geoLocation
  const [location, setLocation] = useState(null);
  const [findLocation, setFindLocation] = useState(false);

  const [position, setPosition] = useState(null);

  return (
    <>
      <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
        {findLocation && (
          <Location position={position} setPosition={setPosition} />
        )}
        {
          // map through coord data from API
          data &&
            data.map(({ _id, lng, lat }) => (
              <Marker key={_id} position={[lat, lng]} icon={duckIcon}></Marker>
            ))
        }
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <button onClick={() => setFindLocation(true)}>Submit a location</button>
      {position && (
        <p>
          {position.lat}, {position.lng}
        </p>
      )}
    </>
  );
};

export default MapComponent;
