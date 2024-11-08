import React from 'react';

const Login = () => {
  // Redirect to Google login
  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <button onClick={handleOAuthLogin}>Login With Google</button>
  )
};

export default Login;
