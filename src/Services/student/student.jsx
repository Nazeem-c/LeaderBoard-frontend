import axios from 'axios';

const API_URL = 'http://localhost:5001/api/v1';  // Replace with your backend URL

export const fetchStudentData = async () => {
  try {
    // Make an API call to your backend to fetch student data
    const response = await axios.get(`${API_URL}/student/student-details?username=${sessionStorage.getItem("username")}`);

    if (response.status === 200) {
      const data = response.data; // Axios automatically parses the JSON response
      return data;
    } else {
      console.error("Failed to fetch student data");
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

export const fetchScoreCard = async (params) => {
    try {
      // Make an API call to your backend to fetch student data
      const response = await axios.get(`${API_URL}/student/score?username=${sessionStorage.getItem("username")}`, {
        params: params,
      });
  
      if (response.status === 200) {
        const data = response.data; // Axios automatically parses the JSON response
        return data;
      } else {
        console.error("Failed to fetch score data");
      }
    } catch (error) {
      console.error("Error fetching score data:", error);
    }
  };