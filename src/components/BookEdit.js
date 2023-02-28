import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onHandleEditSubmit }) {
	const { editBookById } = useContext(BooksContext);
	const [title, setTitle] = useState(book.title);

	const handleInputChange = (event) => {
		setTitle(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onHandleEditSubmit();
		editBookById(title, book.id);
	};

	return (
		<form className="book-edit" onSubmit={handleFormSubmit}>
			<label>Title</label>
			<input
				className="input"
				type="text"
				onChange={handleInputChange}
				value={title}
			/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
