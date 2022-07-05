import React from "react";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className='h-screen bg-sky-50 text-stone-800 font-heading'>
      <header className='max-w-5xl gap-3 px-5 pt-10 mx-auto mb-5 sm:flex'>
        {" "}
        <h1 className='text-4xl font-black tracking-[-0.07em] shrink-0'>
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
              stroke='rgb(41 37 36)'
              d='M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2Z'
            />
          </svg>
          FREE* DUCK FINDER
        </h1>
        <p className='ml-4 -indent-3.5'>
          * Do not take things that don't belong to you (it's usually illegal)
          and besides this whole website is based off a joke. Feel free to
          contribute more places
        </p>
      </header>
      <main className='mx-5 overflow-hidden rounded-lg'>
        <MapComponent />
      </main>
      <footer className='max-w-5xl px-5 mx-auto mt-5 text-sm text-center'>
        The only personal data stored is your location data. All stored data can
        be viewed at {""}
        <a
          href='https://free-duck-finder.herokuapp.com/api/ducks'
          target='_blank'
          className='hover:font-bold'
        >
          Free Duck Finder API
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
