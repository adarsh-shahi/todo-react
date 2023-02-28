import { useContext } from "react";
import BooksContext from "../context/books";

// export default useContext(BooksContext); // wont work because hooks(useContext) cannot be called at top level

function useBooksContext() {
	return useContext(BooksContext);
}

export default useBooksContext;
