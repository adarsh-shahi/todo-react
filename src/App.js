import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
	const [books, setBooks] = useState([]);

	const addBook = (title) => {
		const updatedBooks = [
			...books,
			{ id: Math.round(Math.random() * 9999), title },
		];
		setBooks(updatedBooks);
	};

	const editBook = (title, id) => {
		const updateBooks = books.map((book) => {
			if (book.id === id) return { ...book, title };
			return book;
		});
		setBooks(updateBooks);
	};

	const deleteBookById = (id) => {
		const filteredBooks = books.filter((book) => {
			return book.id !== id;
		});
		setBooks(filteredBooks);
	};
	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList
				books={books}
				onDeleteBookById={deleteBookById}
				onEditBook={editBook}
			/>
			<BookCreate onAddBook={addBook} />
		</div>
	);
}

export default App;
