import React from 'react';

const Login = () => {
  // Redirect to Google login
  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%', backgroundColor: '#ffffff' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px', textAlign: 'center' }}>Welcome Back!</h1>
        <p style={{ color: '#4b5563', marginBottom: '24px', textAlign: 'center' }}>Please login to your account</p>
        <button
          onClick={handleOAuthLogin}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            fontWeight: '600',
            padding: '12px 16px',
            borderRadius: '4px',
            width: '100%',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            border: 'none',
            outline: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          <svg
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
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