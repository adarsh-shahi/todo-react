import BookShow from "./BookShow";
function BookList({ books, onDeleteBookById, onEditBook }) {
	const renderedBookList = books.map((book) => {
		return (
			<BookShow
				book={book}
				onDeleteBookById={onDeleteBookById}
				key={book.id}
				onEditBook={onEditBook}
			/>
		);
	});
	return <div className="book-list">{renderedBookList}</div>;
}

export default BookList;
