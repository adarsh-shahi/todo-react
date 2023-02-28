import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
	const { addBook } = useContext(BooksContext);
	const [title, setTitle] = useState("");

	const handleInputChange = (event) => {
		setTitle(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		addBook(title);
		setTitle("");
	};

	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleFormSubmit}>
				<label>Title: </label>
				<input
					className="input"
					value={title}
					type="text"
					onChange={handleInputChange}
				/>
				<button className="button">Add Book</button>
			</form>
		</div>
	);
}

export default BookCreate;
