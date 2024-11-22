import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OwnerRequestForm from './components/OwnerRequestForm';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import RoomDetailsPage from './components/RoomDetailsPage';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/map" element={<MapComponent />} />

        {/* Protected Route */}
        {/* <Route
          path="/submit-request"
          element={
            <ProtectedRoute>
              <OwnerRequestForm />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/submit-request" element={<OwnerRequestForm />} />
        <Route path="/room-details/:roomId" element={<RoomDetailsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
