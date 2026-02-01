import axios from "axios";
export const fetchUserData = async (username) => {
  if (!username) {
    throw new Error("Username is required");
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }

    throw new Error("Failed to user data");
  }
};


