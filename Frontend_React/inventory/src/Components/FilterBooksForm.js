import React, { useState } from 'react';

const FilterBooksForm = ({ onFilter }) => {
    const [filters, setFilters] = useState('');

    const handleFilterChange = (e) => {
        setFilters(e.target.value);
    };

    const handleFilter = () => {
        onFilter(filters);
    };

    return (
        <div className="bg-white shadow-md rounded p-6 mb-6">
            <input
                type="text"
                value={filters}
                onChange={handleFilterChange}
                placeholder="Search by title, author, genre, publication date, or ISBN"
                className="block w-full p-2 mb-4 border rounded-md"
            />
            <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded-md w-full">Filter Books</button>
        </div>
    );
};

export default FilterBooksForm;
