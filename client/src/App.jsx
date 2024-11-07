import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OwnerRequestForm from './components/OwnerRequestForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<OwnerRequestForm />} />
      </Routes>
    </Router>
  );
}

export default App;
