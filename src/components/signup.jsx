import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../src/asset/css/signup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/create/registermod', formData);
      toast.success(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || 'An error occurred. Please try again.'}`);
      } else if (error.request) {
        toast.error('Network error: No response from server. Please check your connection.');
      } else {
        toast.error('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer />
      <form className="signup-form">
        <h2>Sign Up</h2>
        <Link to="/">
          <span className="close-symbol" role="button" aria-label="Close">✖</span>
        </Link>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="button" onClick={handleSubmit}>Sign Up</button>
        <button
          type="button"
          className="account-login-button"
          onClick={() => navigate('/login')}
        >
          Account Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
