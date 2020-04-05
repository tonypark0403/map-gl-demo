import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
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
        onViewportChange={( viewport ) => {
          setViewport( viewport );
        }}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
