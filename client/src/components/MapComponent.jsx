import React, { useState, useEffect } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = () => {
  console.log(import.meta.env.VITE_MAPBOX_TOKEN);
  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MapComponent;

// import React, { useState, useEffect } from "react";
// import Map, { Marker, NavigationControl, Popup } from "react-map-gl";

// // Remove mapbox-gl.css import here
// const MapComponent = () => {
//   const [viewport, setViewport] = useState({
//     longitude: -100,
//     latitude: 40,
//     zoom: 3
//   });

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!import.meta.env.VITE_MAPBOX_TOKEN) {
//       setError('Mapbox token is missing');
//     }
//   }, []);

//   if (error) {
//     return <p style={{ color: "red" }}>{error}</p>;
//   }

//   return (
//     <Map
//       mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
//       initialViewState={viewport}
//       style={{ width: "100%", height: "400px" }}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       onViewportChange={(nextViewport) => setViewport(nextViewport)}
//     >
//       {/* Optional: Add a Marker */}
//       <Marker longitude={-100} latitude={40}>
//         <div style={{ color: 'red' }}>📍</div>
//       </Marker>

//       {/* Optional: Add navigation control */}
//       <NavigationControl position="top-left" />
//     </Map>
//   );
// };

// export default MapComponent;
