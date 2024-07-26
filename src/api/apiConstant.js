import axios from 'axios';

// Base configuration for Axios
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  timeout: 10000, // Set a timeout (in milliseconds) for the requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Common function for API calls
const apiCall = async (method, url, data = null, params = null) => {
  try {
    const response = await axiosInstance({
      method: method,
      url: url,
      data: data,
      params: params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // Request made and server responded with a status code outside 2xx range
      console.error('Error Response:', error.response.data);
      throw new Error(
        `Error: ${error.response.status} ${error.response.statusText}`,
      );
    } else if (error.request) {
      // Request made but no response received
      console.error('Error Request:', error.request);
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request
      console.error('Error Message:', error.message);
      throw new Error('Error in setting up the request.');
    }
  }
};

export const get = (url, params) => apiCall('get', url, null, params);
export const post = (url, data) => apiCall('post', url, data);
export const put = (url, data) => apiCall('put', url, data);
export const del = url => apiCall('delete', url);
