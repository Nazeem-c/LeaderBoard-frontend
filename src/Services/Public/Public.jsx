// services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/v1';  // Replace with your backend URL

export const getLeaderboardStudent = async (params) => {
  
  try {
    const response = await axios.get(`${API_URL}/leaderboard`, {
      params: params,
    });
    // console.log('API Response:', response); 
    // console.log('content', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};



export const getLeaderboardCollege = async (params) => {
  
  try {
    const response = await axios.get(`${API_URL}/collegeleaderboard`, {
      params: params,
    });
    // console.log('API Response:', response); 
    // console.log('content', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};
