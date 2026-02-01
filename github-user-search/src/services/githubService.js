import axios from "axios";
/**
 * Fetch GitHub users with advanced search
 * @param {string} query - Username or keyword
 * @param {string} location - Optional location filter
 * @param {number} minRepos - Optional minimum number of repos
 * @returns {Array} - Array of user objects
 */
export const fetchUserData = async (query, location = "", minRepos = 0) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    return response.data.items; // Array of users
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
};
