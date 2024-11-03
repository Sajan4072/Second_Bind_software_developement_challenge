// BooksList.js
import React from 'react';

const BooksList = ({ books }) => {

    const handleExport = () => {
        // Prepare CSV data
        const headers = ['Entry ID', 'Title', 'Author', 'Genre', 'Publication Date', 'ISBN'];
        const csvRows = [
            headers.join(','), // Add headers row
            ...books.map(book => [
                book.entry_id,
                `"${book.title}"`, // Wrapping text in quotes to handle commas in data
                `"${book.author}"`,
                book.genre,
                book.publication_date,
                book.isbn
            ].join(','))
        ];

        // Create CSV Blob and initiate download
        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'books.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="overflow-x-auto">
            <button onClick={handleExport} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
                Export to CSV
            </button>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Entry ID</th>
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-left">Author</th>
                        <th className="py-3 px-6 text-left">Genre</th>
                        <th className="py-3 px-6 text-left">Publication Date</th>
                        <th className="py-3 px-6 text-left">ISBN</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {books.map((book) => (
                        <tr key={book.entry_id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">{book.entry_id}</td>
                            <td className="py-3 px-6 text-left">{book.title}</td>
                            <td className="py-3 px-6 text-left">{book.author}</td>
                            <td className="py-3 px-6 text-left">{book.genre}</td>
                            <td className="py-3 px-6 text-left">{book.publication_date}</td>
                            <td className="py-3 px-6 text-left">{book.isbn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BooksList;
