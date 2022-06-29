import React from "react";
import MapView from "./components/MapView";
import "mapbox-gl/dist/mapbox-gl.css";
// TO DO: get current location, show current location, build form and connect to backend, style, about page
// TO ALSO DO: add rating system to duck ponds (accessibility, cleanliness, approachability??)

// ABOUT: based off meme, this is essentially a locater for public duck ponds. add ones that you know about

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>FREE* DUCK FINDER</h1>
      <MapView />
    </div>
  );
};

export default App;
