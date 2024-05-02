import { createContext } from "react";
import { Book } from "./Types/types";
import { Author } from "./Types/types";

// Create a global contex to add new book to book list
type ContexType = {
  books: Book[];
  setBooks: (updatedBook: Book[]) => void;
};
const GlobalContex = createContext<ContexType>({
  books: [],
  setBooks: () => {},
});
export default GlobalContex;
