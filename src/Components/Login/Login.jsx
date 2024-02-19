import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5001/api/v1/login', formData);

      if (response.data.error) {
        console.error(response.data.error);
        // Handle authentication error
      } else {
        // Successfully logged in
        console.log('Login successful');

        const { sessionToken, username } = response.data;

        document.cookie = `sessionToken=${sessionToken}; path=/`;

        // Generate the endpoint dynamically based on the username
        const endpoint = `/profile/${username}`;
        
        navigate(endpoint);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
