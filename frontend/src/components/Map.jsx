import * as React from "react";
import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { render } from "react-dom";
import Map, {
  Source,
  Layer,
  Marker,
  useMap,
  MapProvider,
  GeolocateControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

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
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });
  const [centerMarker, setCenterMarker] = useState(false);
  const [newLocation, setNewLocation] = useState([]);

  useEffect(() => {
    setCenterMarker(true);
  }, [setNewLocation]);

  return (
    <>
      <MapProvider>
        <Map
          id='map'
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: 800, height: 600 }}
          mapStyle='mapbox://styles/mapbox/outdoors-v11'
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {centerMarker && (
            <Marker longitude={-122.4} latitude={37.8} color='red' />
          )}
          <GeolocateControl
            onGeolocate={(position) => {
              // get latitude and longitude of user current location
              setNewLocation([
                position.coords.longitude,
                position.coords.latitude,
              ]);
            }}
          />
          <Source type='geojson' data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
      </MapProvider>
      <p>
        new long: {newLocation[0]}, new lat: {newLocation[1]}
      </p>
    </>
  );
};

export default MapBasic;
