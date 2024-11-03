import React, { useState, useEffect } from 'react';
import AddBookForm from './Components/AddBookForm';
import FilterBooksForm from './Components/FilterBooksForm';
import BooksList from './Components/BooksList';
import { getBooks, addBook, filterBooks } from './Services/api';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetch all books on initial load
  useEffect(() => {
      fetchBooks();
  }, []);

  const fetchBooks = async () => {
      try {
          const { data } = await getBooks();
          setBooks(Array.isArray(data) ? data : []); // Ensuring `data` is an array
          setFilteredBooks(Array.isArray(data) ? data : []);
      } catch (error) {
          console.error('Error fetching books:', error);
      }
  };

  const handleAddBook = async (newBookData) => {
      try {
          await addBook(newBookData); 
          fetchBooks(); // Refresh books list after adding
      } catch (error) {
          console.error('Error adding book:', error);
      }
  };

  const handleFilter = async (query) => {
      if (query.trim() === '') {
          setFilteredBooks(books); // Show all books if no query
      } else {
          try {
              const { data } = await filterBooks(query);
              setFilteredBooks(Array.isArray(data) ? data : []); // Ensure `data` is an array
          } catch (error) {
              console.error('Error filtering books:', error);
          }
      }
  };

  return (
      <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Second Bind Book Inventory Management</h1>
          
          <AddBookForm onAddBook={handleAddBook} />
          <FilterBooksForm onFilter={handleFilter} />
          <BooksList books={filteredBooks} />
      </div>
  );
};

export default App;
