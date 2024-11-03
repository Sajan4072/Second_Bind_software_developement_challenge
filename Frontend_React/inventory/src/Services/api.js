import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; 

export const addBook = (bookData) => axios.post(`${API_BASE_URL}/inventory/inventory/`, bookData);
export const getBooks = (filters = '') => axios.get(`${API_BASE_URL}/inventory/inventory/?search=${filters}`);

// Add the filterBooks function
export const filterBooks = (filters) => {
    return axios.get(`${API_BASE_URL}/inventory/inventory/?search=${filters}`);
};

