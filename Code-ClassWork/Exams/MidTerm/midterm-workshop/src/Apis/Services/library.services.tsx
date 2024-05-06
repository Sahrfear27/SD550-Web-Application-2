import http from "../axios";
import { Book, Author, AddAuthorType, Publiser } from "../../Types/type";

// Add new Book
const addNewBook = (book: Book) => {
  return http.post("/book", book);
};

// Display All Books
const getBook = () => {
  return http.get("/book");
};

// Add new Author
const addNewAuthor = (author: Author) => {
  return http.post("/author", author);
};

// Get new Author
const getAuthor = () => {
  return http.get("/author");
};

// Add an author to a book
const addAuthorToBook = (bookId: string, author: AddAuthorType) => {
  return http.put(`/book/${bookId}`, author);
};

// Delete a book
const deleteBook = (bookId: string) => {
  return http.delete(`/book/${bookId}`);
};

// Update a book
const updatedBook = (bookId: string, newBook: Book) => {
  return http.put(`/book/${bookId}`, newBook);
};

// Add New publisher
const newPublisher = (newpublisher: Publiser) => {
  return http.post("/publisher", newpublisher);
};

// Get all publishers
const getPublishers = () => {
  return http.get("/publisher");
};
export default {
  addNewBook,
  getBook,
  addNewAuthor,
  getAuthor,
  addAuthorToBook,
  deleteBook,
  updatedBook,
  newPublisher,
  getPublishers,
};
