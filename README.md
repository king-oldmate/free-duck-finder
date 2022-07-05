<div align="center">
<img src='img/duck.png' alt="duck">
<h1>Free Duck Finder</h1>

A MERN full-stack web application to help users find local free\* ducks.

<h6>* ducks are not actually free this is a joke</h6>
</div>

[Demo](http://freeduckfinder.online)

## About the project

![Preview](/img/fdf-full.jpg)

I wanted to make a full-stack web app for my [portfolio](http://raymond-zeaiter.au) and didn't want to just make another to-do list. So I built something based upon this joke I saw:

![The elites don't want you to know this but the ducks at the part are free you can take them home I have 458 ducks](/img/meme.png)

Users at the [demo](http://freeduckfinder.online) can view and submit duck locations. Data goes through a REST API (I _should_ provide some documentation on that) that I built and is stored/accessed from a MongoDB.

### Built With

- [React.js](https://reactjs.org/)
- [TailwindCSS]()
- [Leaflet]()
- [Node.js]()
- [MongoDB]()

## Getting started

### Prerequisites

- npm

```
npm install
```

### Backend Installation

1. Create a `.env` file
2. Create a variable `PORT` and assign an integer
3. Create a variable `MONGO_URI` and paste your connection string from MongoDB.
4. Start the server.

```
npm start server
```

Note: the frontend will work without the backend running on your local machine, as it is accessing [this API](https://free-duck-finder.herokuapp.com/api/ducks).

### Frontend Installation

1. In a terminal application:

```
cd frontend
```

2. Then install npm:

```
npm install
```

- If you are running your own local server then you will have to replace `https://free-duck-finder.herokuapp.com/api/ducks` with `http://localhost:<PORT>/api/ducks` in both
  - `/components/MapComponent.jsx`
  - `/components/Location.jsx`.

3. Then start:

```
npm start
```

## Roadmap

- [x] Access and display location data on map
- [x] User able to post location data
- [ ] Add a voting system
  - [ ] `total votes` and `upvotes` keys
- [ ] Filter poorly ranked locations
  - [ ] Auto-deleting these could happen
- [ ] Implement marker clustering

## Acknowledgements

- [react-leaflet](https://react-leaflet.js.org/)
- [React Leaflet Examples](https://tomik23.github.io/react-leaflet-examples/#/simple-map) by [tomik23](https://github.com/tomik23)
