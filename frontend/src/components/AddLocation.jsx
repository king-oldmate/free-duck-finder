import React, { useState, useEffect } from "react";
import axios from "axios";

const AddLocation = ({ marker, setMarker }) => {
  // // GET request
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/api/ducks`);
  //       setData(response.data);
  //       setError(null);
  //     } catch (error) {
  //       setError(error.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  // console.log(data);

  // POST request
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/ducks`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    console.log(marker);
    // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
    const location = new URLSearchParams({
      longitude: marker.longitude,
      latitude: marker.latitude,
    });
    console.log(location);
    location.append("extraparam", "value");
    axios.post(`http://localhost:5000/api/ducks`, location).then((response) => {
      console.log(response);
    });
    setMarker({ display: false });
  }

  return (
    <div className='flex justify-center m-5'>
      {/* {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ location, _id, index, lng, lat }) => (
            <li key={_id}>
              <h3>{lng}</h3>
              <h3>{lat}</h3>
            </li>
          ))}
      </ul> */}
      {/* check if geolocation has been used (probs lng and lat !== 0). Keep button grayed out till then*/}

      <button
        onClick={createPost}
        disabled={marker.display ? false : true}
        className='px-6 py-1 mx-auto rounded-md bg-duck-yellow w-fit hover:shadow-lg disabled:bg-slate-400'
      >
        Add current location?
      </button>
    </div>
  );
};

export default AddLocation;
