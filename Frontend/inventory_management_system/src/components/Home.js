import React from 'react';

export default function Home() {
  return (
    <div 
      className="container-fluid p-5 text-center" 
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <div 
        className="d-flex flex-column justify-content-center align-items-center" 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '600px',
        }}
      >
        <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Welcome to Inventory Management System
        </h1>
        <p className="mb-4" style={{ fontSize: '1.2rem' }}>
          Streamline your inventory operations effortlessly with our advanced MERN stack solution. Track, manage, and optimize your stock in real-time!
        </p>
        <a 
          href="/products" 
          className="btn btn-primary btn-lg" 
          style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '1.2rem' }}
        >
          Go to Products Section
        </a>
      </div>
    </div>
  );
}
