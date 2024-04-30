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
  const updateBook = (updatedBook: Books) => {
    setBookState([...bookState, updatedBook]);
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
            <tr key={books.id}>
              <td>{books.id}</td>
              <td>{books.title}</td>
              <td>{books.genre}</td>
              <td>{books.isbn}</td>
              <td>{books.format}</td>
              <td>{books.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddBooks onAddBook={addNewBook} />
      <br />

      <GetBookById />
      <br />
      <UpdateBook onUpdate={updateBook} />
      {/* <UpdateBook /> */}
    </div>
  );
}
