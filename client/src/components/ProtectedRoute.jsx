import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('authToken'); // Or any other method to check login status

  if (!isLoggedIn) {
    return <Navigate to="/" />; // Redirect to login page if not logged in
  }

  return children; // Render the child component if logged in
};

export default ProtectedRoute;
