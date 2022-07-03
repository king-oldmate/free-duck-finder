import React, { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import axios from "axios";

const MarkerData = () => {
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

  return (
    <>
      {data &&
        data.map(({ _id, lng, lat }) => (
          <Marker key={_id} position={[lat, lng]} />
        ))}
    </>
  );
};

export default MarkerData;
