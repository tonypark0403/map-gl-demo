import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import * as parkData from './data/skateboard-parks.json';
import config from './config';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={config.mapboxToken}
        mapStyle="mapbox://styles/c3dream/ck8ngj2b20td01iqvk8v88m63"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
