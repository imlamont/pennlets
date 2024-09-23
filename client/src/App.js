import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  // record to hold api message
  const [message, setMessage] = useState('');

  // callback to fetch data from api
  useEffect(()=>{
    fetch('http://localhost:3001/api/test')
    .then(response => {
      if (!response.ok) {
        throw new Error("api call error");
      }
      return response.json();
    })
    .then(data => {
      setMessage(data.message); 
    })
    .catch(error => {
      console.error('error in api communication:', error);
    });
  }, []);

  // html return
  return (
    <div className="App">
      <p>{message ? message : "loading"}</p>
    </div>
  );
}

export default App;
