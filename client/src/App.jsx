import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import MapComponent from './components/MapComponent';
import HomePage from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path='/map' element={<MapComponent/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
