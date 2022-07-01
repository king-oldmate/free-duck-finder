import React, { useState, useEffect } from "react";
import axios from "axios";

const DuckData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/ducks`);
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

  console.log(data);

  return (
    <div>
      <h1>Duck API</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ longitude, latitude, _id, index }) => (
            <li key={index}>
              <h3>{_id}</h3>
              <h3>{longitude}</h3>
              <h3>{latitude}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DuckData;
