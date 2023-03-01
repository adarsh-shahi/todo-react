import { useEffect, useContext } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";

function App() {
	const { stableGetAllBooks } = useContext(BooksContext);

	/** DONT DO THIS */
	// getAllBooks(); infinite loop of rerendering the APP component
	useEffect(() => {
		stableGetAllBooks();
	}, [stableGetAllBooks]);

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
