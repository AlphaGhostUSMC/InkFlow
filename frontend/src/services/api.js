import axios from 'axios';

const API_BASE_URL = 'http://localhost:6060'; // Replace with your API base URL

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching blogs');
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching blog');
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/blogs`, blogData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating blog');
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/blogs/${id}`, blogData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating blog');
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting blog');
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error logging in');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error registering user');
  }
};

// Add more API functions as needed
