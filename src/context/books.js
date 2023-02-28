import { createContext, useState } from "react";

const BooksContext = new createContext();
const URL = `http://localhost:3001/`;

function Provider({ children }) {
	const [books, setBooks] = useState([]);

	const getAllBooks = async () => {
		const result = await fetch(`${URL}books`, {
			method: "GET",
		});

		const users = await result.json();
		setBooks(users);
	};

	const addBook = async (title) => {
		const result = await fetch(`${URL}books`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		});

		const user = await result.json();
		setBooks([...books, user]);
	};

	const editBookById = async (title, id) => {
		const result = await fetch(`${URL}books/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		});

		const user = await result.json();

		const updatedBooks = books.map((book) => {
			if (book.id === id) return { ...book, ...user }; //all the property in books which are similar in user will be replaced by user property
			return book;
		});
		setBooks(updatedBooks);
	};

	const deleteBookById = async (id) => {
		await fetch(`${URL}books/${id}`, {
			method: "DELETE",
		});

		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	const valueToShare = {
		books,
		addBook,
		editBookById,
		deleteBookById,
		getAllBooks,
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;
