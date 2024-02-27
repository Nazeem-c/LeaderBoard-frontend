import axios from "axios";

const API_URL = "http://localhost:5001/api/v1"; // Replace with your backend URL

export const mailing = async (params) => {
  try {
    // Make an API call to your backend to fetch student data
    const response = await axios.get(`${API_URL}/mail-score`,{
        params : params
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    throw error;
  }
};
