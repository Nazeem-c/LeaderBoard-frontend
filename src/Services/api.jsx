
import axios from 'axios';
import * as userService from './services/userService';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/api/v1', // Replace with your API base URL
  // Add any other configurations, headers, etc.
});

export { userService }; // Export all services from api.js
export default instance;
