import React, { useState, useEffect } from "react";
import axios from "axios";

const DuckData = ({ coordinates }) => {
  // GET request
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

  // POST request
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/ducks`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
    const location = new URLSearchParams({
      longitude: coordinates.longitude,
      latitude: coordinates.latitude,
    });
    console.log(location);
    location.append("extraparam", "value");
    axios.post(`http://localhost:5000/api/ducks`, location).then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <h1>Duck API</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ location, _id, index }) => (
            <li key={_id}>
              <h3>{location.coordinates[0]}</h3>
              <h3>{location.coordinates[1]}</h3>
            </li>
          ))}
      </ul>
      <button onClick={createPost}>Add current location?</button>
    </div>
  );
};

export default DuckData;
