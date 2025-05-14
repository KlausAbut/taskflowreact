import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

export const fetchTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (taskData) => axios.post(`${API_URL}/tasks`, taskData);