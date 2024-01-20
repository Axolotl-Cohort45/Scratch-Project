import React from 'react';


function App({ Component }) {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: 'tan',
    padding: "30px",
    fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
  }

  const background = {
    backgroundColor: "#e3ddd5",
    minHeight: '100vh', // Set minimum height to 100% of the viewport height
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={background}>
      <h1 style={headerStyle}>Restaurant</h1>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';

// const MetArtComponent = () => {
//   const [objectIDs, setObjectIDs] = useState([]);

//   useEffect(() => {
//     // Fetch data from the MET API
//     fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&tags=true&q=Lions&artistDisplayName=Salvador%20Dali')
//       .then(response => response.json())
//       .then(data => {
//         // Update state with the received Object IDs
//         setObjectIDs(data.objectIDs);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       <h2>Objects by Salvador Dali</h2>
//       <ul>
//         {objectIDs.map(objectID => (
//           <li key={objectID}>
//             {/* Fetch details for each Object ID */}
//             <ObjectDetails objectID={objectID} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ObjectDetails = ({ objectID }) => {
//   const [objectData, setObjectData] = useState(null);

//   useEffect(() => {
//     // Fetch details for each Object ID
//     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
//       .then(response => response.json())
//       .then(data => {
//         // Update state with the received Object details
//         setObjectData(data);
//       })
//       .catch(error => {
//         console.error(`Error fetching data for Object ID ${objectID}:`, error);
//       });
//   }, [objectID]);

//   if (!objectData) {
//     // Loading state
//     return <p>Loading...</p>;
//   }

//   // Display details for each Object ID
//   return (
//     <div>
//       <h4>{objectData.title}</h4>
//       <p>Artist: {objectData.artistDisplayName}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default MetArtComponent;
