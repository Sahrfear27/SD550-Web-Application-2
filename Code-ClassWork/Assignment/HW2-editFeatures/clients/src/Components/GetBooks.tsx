import { Books } from "../Types/type";
import booksServices from "../apis/services/books.services";
import { useEffect, useState } from "react";
import AddBooks from "./AddBooks";
import GetBookById from "./GetBookById";
import UpdateBook from "./UpdateBook";
export default function GetBooks() {
  const [bookState, setBookState] = useState<Books[]>([
    {
      id: 0,
      title: "",
      genre: "",
      isbn: "",
      format: "",
      summary: "",
    },
  ]);

  const [hoverBookId, setHoverBookId] = useState<number | null>(null);

  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await booksServices.getBooks();
        if (response.status == 200) {
          setBookState(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getAllBooks();
  }, []);

  const addNewBook = (book: Books) => {
    setBookState([...bookState, book]);
  };

  // Update books
  const updateBook = (newBook: Books) => {
    const bookIndex = bookState.findIndex((book) => book.id === newBook.id);
    if (bookIndex !== -1) {
      const updatedBook = [...bookState];
      updatedBook[bookIndex] = newBook;
      setBookState(updatedBook);
    }
  };
  // const updateBook = (newBook: Books) => {
  //   setBookState((prevState) =>
  //     prevState.map((book) => (book.id === newBook.id ? newBook : book))
  //   );
  // };

  // DeleteBook by id
  const handleDelete = async (id: number) => {
    try {
      const response = await booksServices.deleteBook(id);
      if (response.status == 200) {
        setBookState((prevState) => prevState.filter((book) => book.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4 className="text-center">Book Collection</h4>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">isbn</th>
            <th scope="col">Format</th>
            <th scope="col">Summary</th>
          </tr>
        </thead>
        <tbody>
          {bookState.map((books) => (
            <tr
              key={books.id}
              onMouseEnter={() => setHoverBookId(books.id)}
              onMouseLeave={() => setHoverBookId(null)}
            >
              <td>{books.id}</td>
              <td>{books.title}</td>
              <td>{books.genre}</td>
              <td>{books.isbn}</td>
              <td>{books.format}</td>
              <td>{books.summary}</td>
              <td>
                {hoverBookId === books.id && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(books.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddBooks onAddBook={addNewBook} />
      <br />

      <GetBookById />
      <br />
      <UpdateBook onUpdate={updateBook} />
    </div>
  );
}
