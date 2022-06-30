import React, { useState, useMemo, useEffect, useRef } from "react";
import { render } from "react-dom";
import Map, { Marker, MapRef } from "react-map-gl";
import { useGeolocated } from "react-geolocated";
import Pin from "./Pin";

const MapView = () => {
  const [coordinateList, setCoordinateList] = useState([]);
  const mapRef = React.useRef();

  useEffect(() => {
    // removing this variable declaration breaks everything and I don't know why
    let ponds;
    fetch("http://localhost:5000/api/ducks")
      .then((response) => response.json())
      .then((data) => (ponds = getLocations(data)))
      .then((ponds) => setCoordinateList(ponds));
  }, []);

  // const initialViewState = {
  //   longitude: ,
  //   latitude: ,
  //   zoom: 10,
  //   pictch: 0,
  //   bearing:0 ,
  // }

  function getLocations(data) {
    let pondList = data.map((pond) => {
      const pondCoordinates = [pond.longitude, pond.latitude];
      return pondCoordinates;
    });
    return pondList;
  }

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
            <Pin />
          </Marker>
        );
      }),
    [coordinateList]
  );

  function getCurrentLocation() {}
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return (
    <>
      <Map
        initialViewState={{
          longitude: 151.1,
          latitude: -33.6,
          zoom: 10,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v8'
        mapboxAccessToken={process.env.REACT_APP_TOKEN}
      >
        {/* get an array of locations and map through them to place multiple markers */}
        {pins}
      </Map>
      <button className='' onClick=''>
        Get Location
      </button>
      {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : coords ? (
        <table>
          <tbody>
            <tr>
              <td>latitude</td>
              <td>{coords.latitude}</td>
            </tr>
            <tr>
              <td>longitude</td>
              <td>{coords.longitude}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
    </>
  );
};

export default MapView;
