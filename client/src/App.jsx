import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
