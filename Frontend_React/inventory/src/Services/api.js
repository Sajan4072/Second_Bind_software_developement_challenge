import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; 

export const addBook = (bookData) => axios.post(`${API_BASE_URL}/inventory/inventory/`, bookData);
export const getBooks = (filters = '') => axios.get(`${API_BASE_URL}/inventory/inventory/?search=${filters}`);
export const exportBooks = (format) => axios.get(`${API_BASE_URL}/inventory/export/?format=${format}`, { responseType: 'blob' });

// Add the filterBooks function
export const filterBooks = (filters) => {
    return axios.get(`${API_BASE_URL}/inventory/inventory/?search=${filters}`);
};

