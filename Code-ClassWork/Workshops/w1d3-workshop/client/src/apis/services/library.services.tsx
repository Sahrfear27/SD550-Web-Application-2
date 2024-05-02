import http from "../axios";
import { Book } from "../../Types/types";
import { Author } from "../../Types/types";
// Add a new book
const addBook = (newBook: Book) => {
  return http.post(`/books`, newBook);
};

// Get all book
const getBook = () => {
  return http.get(`/books`);
};
export default {
  addBook,
  getBook,
};
