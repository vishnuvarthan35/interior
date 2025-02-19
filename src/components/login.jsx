import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../src/asset/css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    
    // Check if email and password are correct
    if (formData.email === 'correctEmail@example.com' && formData.password === 'correctPassword') {
        navigate('/contact'); // Redirect to contact page
    } else {
        console.log('Invalid email or password'); // Handle invalid login
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" o
      nSubmit={handleSubmit}>
        <h2>Login</h2>
        {/* Close symbol directly redirects to home */}
        <Link to="/">
          <span className="close-symbol" role="button" aria-label="Close">✖</span>
        </Link>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        {/* Navigate to signup page */}
        <p className="no-account-prompt">
          No account?{' '}
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
