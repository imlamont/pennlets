import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OwnerRequestForm from './components/OwnerRequestForm';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />

        {/* Protected Route */}
        <Route
          path="/submit-request"
          element={
            <ProtectedRoute>
              <OwnerRequestForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
