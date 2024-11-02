import React from 'react';

const BooksList = ({ books }) => (
    <div className="overflow-x-auto">
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

export default BooksList;
