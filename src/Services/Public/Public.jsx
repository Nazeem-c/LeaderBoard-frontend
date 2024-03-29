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




export const getLeaderboardDepartment = async (params) => {
  
  try {
    const response = await axios.get(`${API_URL}/departmentleaderboard`, {
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






export const getCollege = async () => {
  
  try {
    const response = await axios.get(`${API_URL}/collegelistselect`);
    // console.log('API Response:', response); 
    // console.log('content', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};

export const getDepartments= async () => {
  
  try {
    const response = await axios.get(`${API_URL}/departmentslistselect`);
    // console.log('API Response:', response); 
    // console.log('content', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};

export const getBatches = async () => {
  
  try {
    const response = await axios.get(`${API_URL}/btacheslistselect`);
    // console.log('API Response:', response); 
    // console.log('content', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};
