import React from 'react';

const Login = () => {
  // Redirect to Google login
  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
  //     <div className="w-full max-w-md transform rounded-lg bg-white p-8 shadow-lg transition duration-500 hover:scale-105">
  //       <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
  //         Sign In with Google
  //       </h2>
  //       <button
  //         onClick={handleOAuthLogin}
  //         className="w-full flex items-center justify-center space-x-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  //       >
  //         <svg
  //           className="h-5 w-5"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 48 48"
  //         >
  //           <path
  //             fill="#EA4335"
  //             d="M24 9.5c3.31 0 6.28 1.14 8.63 3.03L38.6 8.5C34.69 5.45 29.6 3.5 24 3.5 14.79 3.5 7.19 9.55 4.4 17.55l6.63 5.19C12.57 17.03 17.87 9.5 24 9.5z"
  //           />
  //           <path
  //             fill="#34A853"
  //             d="M24 44.5c5.18 0 9.49-1.71 12.66-4.63l-6.03-4.88c-1.72 1.17-3.91 1.88-6.63 1.88-5.04 0-9.29-3.31-10.81-7.88l-6.52 5.02C10.8 40.99 17.01 44.5 24 44.5z"
  //           />
  //           <path
  //             fill="#4A90E2"
  //             d="M43.63 24.5c0-1.21-.11-2.38-.32-3.5H24v7h10.91c-.47 2.49-1.79 4.58-3.79 6.03l6.03 4.88c3.5-3.21 5.48-7.97 5.48-13.41z"
  //           />
  //           <path
  //             fill="#FBBC05"
  //             d="M13.19 27.5c-.38-1.14-.59-2.36-.59-3.5 0-1.22.22-2.4.59-3.5L6.56 15.28C5.58 17.38 5 19.84 5 22.5s.58 5.12 1.56 7.22l6.63-5.22z"
  //           />
  //         </svg>
  //         <span>Sign in with Google</span>
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <button>Login</button>
  )
};

export default Login;
