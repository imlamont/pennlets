import React from 'react';

const Login = () => {
  // Redirect to Google login
  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome Back!</h1>
        <p className="text-gray-600 mb-6 text-center">Please login to your account</p>
        <button
          onClick={handleOAuthLogin}
          className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <svg
            className="w-5 h-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path d="M23.33 24.36c-.97.68-2.1 1.04-3.33 1.04-1.78 0-3.39-.76-4.53-2.03-.94-.99-1.45-2.37-1.45-3.84 0-1.5.51-2.88 1.45-3.84C18.01 18.76 21.65 17 24 17c1.12 0 2.26.18 3.33.54 1.29.41 2.45 1.06 3.41 1.83.56.46 1.12.97 1.66 1.55l-.78 1.32c-.64-.59-1.38-1.05-2.17-1.36-1.09-.41-2.32-.65-3.5-.65-2.46 0-4.73 1.18-6.26 3.11-.52.66-.8 1.45-.8 2.27 0 .84.28 1.61.8 2.27 1.52 1.93 3.8 3.11 6.26 3.11 1.18 0 2.41-.24 3.5-.65.79-.31 1.53-.77 2.17-1.36l.78 1.32c-.54.58-1.1 1.09-1.66 1.55-1.06.77-2.12 1.42-3.41 1.83C25.26 25.18 24.12 25.36 23.33 24.36z" />
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
