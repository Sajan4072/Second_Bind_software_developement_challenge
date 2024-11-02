import React, { useState } from 'react';
import { addBook } from '../Services/api';

const AddBookForm = ({onAddBook}) => {
    const [formData, setFormData] = useState({
        title: '', author: '', genre: '', publication_date: '', isbn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addBook(formData);
            alert('Book added successfully!');
            onAddBook(); // Call the onAddBook function to refresh the book list
            setFormData({ title: '', author: '', genre: '', publication_date: '', isbn: '' });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Add New Book</h2>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="block w-full p-2 mb-4 border rounded-md"
                required
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                className="block w-full p-2 mb-4 border rounded-md"
                required
            />
            <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="block w-full p-2 mb-4 border rounded-md"
                required
            />
            <input
                type="date"
                name="publication_date"
                value={formData.publication_date}
                onChange={handleChange}
                className="block w-full p-2 mb-4 border rounded-md"
                required
            />
            <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="ISBN"
                className="block w-full p-2 mb-4 border rounded-md"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Add Book</button>
        </form>
    );
};

export default AddBookForm;
