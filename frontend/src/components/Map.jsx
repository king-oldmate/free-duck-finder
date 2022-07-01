import * as React from "react";
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useRef,
} from "react";
import { render } from "react-dom";
import Map, {
  Source,
  Layer,
  Marker,
  useMap,
  MapProvider,
  GeolocateControl,
  MarkerDragEvent,
  LngLat,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import DuckData from "./DuckData";

const MAPBOX_TOKEN = process.env.REACT_APP_TOKEN;

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-122.4, 37.8] },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-122.5, 37.8] },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-122.6, 37.6] },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const MapContext = React.createContext();

const MapBasic = () => {
  const [viewState, setViewState] = React.useState({
    longitude: 151,
    latitude: -33,
    zoom: 3,
  });
  const [marker, setMarker] = useState({
    longitude: 0,
    latitude: 0,
    display: false,
  });

  const mapBox = useRef(null);
  const markerCenter = useRef();

  return (
    <>
      <MapProvider>
        <Map
          ref={mapBox}
          id='map'
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: 800, height: 600 }}
          mapStyle='mapbox://styles/mapbox/outdoors-v11'
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {marker.display && (
            <Marker
              ref={markerCenter}
              longitude={marker.longitude}
              latitude={marker.latitude}
              color='red'
              draggable
              onDragEnd={(position) => {
                console.log(position);
                setMarker({
                  longitude: position.lngLat.lng,
                  latitude: position.lngLat.lat,
                  display: true,
                });
              }}
            />
          )}
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            onGeolocate={(position) => {
              // get latitude and longitude of user current location
              setMarker({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                display: true,
              });
            }}
          />
          <Source type='geojson' data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
      </MapProvider>
      <p>
        new long: {marker.longitude}, new lat: {marker.latitude}
      </p>
      <DuckData coordinates={marker} />
    </>
  );
};

export default MapBasic;
