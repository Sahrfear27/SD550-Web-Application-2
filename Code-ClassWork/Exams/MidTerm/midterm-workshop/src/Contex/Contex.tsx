import { createContext } from "react";
import { Book, Author, Publiser } from "../Types/type";
type ContexType = {
  book: Book[];
  setBook: (book: Book[]) => void;
  author: Author[];
  setAuthor: (author: Author[]) => void;
  newPublisher: Publiser[];
  setNewPublisher: (publisher: Publiser[]) => void;
};
const GlobalContex = createContext<ContexType>({
  book: [],
  setBook: () => {},
  author: [],
  setAuthor: () => {},
  newPublisher: [],
  setNewPublisher: () => {},
});

export default GlobalContex;
