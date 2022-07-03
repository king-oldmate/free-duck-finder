import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useGeolocated } from "react-geolocated";
import L, { latLng } from "leaflet";
import axios from "axios";
import { duckIcon } from "./duckIcon";

const MapComponent = () => {
  console.log(latLng);

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
  const [location, setLocation] = useState({
    lat: -33,
    lng: 151,
  });

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  console.log(coords);

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <Marker key={"1"} position={[location.lat, location.lng]} draggable />
      {data &&
        data.map(({ _id, lng, lat }) => (
          <Marker key={_id} position={[lat, lng]} icon={duckIcon}></Marker>
        ))}

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
