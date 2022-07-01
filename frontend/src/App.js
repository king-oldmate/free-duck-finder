import React from "react";
import Map from "./components/Map";
// DONE: get current location, show current location, build form (didn't need a form so watevs) and connect to backend,
// TO DO:  style, controls, about page
// TO ALSO DO: add rating system to duck ponds (accessibility, cleanliness, approachability??), remove geolocate marker after a few seconds

// ABOUT: based off meme, this is essentially a locater for public duck ponds. add ones that you know about

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 24 24'
          className='inline-block'
        >
          <path
            fill='#FFD801'
            stroke='black'
            d='M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2Z'
          />
        </svg>
        FREE* DUCK FINDER
      </h1>
      <Map />
    </div>
  );
};

export default App;
