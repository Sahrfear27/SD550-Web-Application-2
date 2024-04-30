import { FormEvent, useEffect, useRef, useState } from "react";
import booksServices from "../apis/services/books.services";
import { Books } from "../Types/type";

export default function GetBookById() {
  const [books, setBooks] = useState<Books[]>([]);
  //   Bind the id with the state using uncontrolled component which is controlled by the DOM
  const [id, setId] = useState<number>(0);

  const bookRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = bookRef.current?.value;
    if (newId) {
      const numId = parseInt(newId);
      setId(numId);
      bookRef.current.value = "";
    }
  };
  useEffect(() => {
    async function getOneBook() {
      try {
        const response = await booksServices.getOneBook(id);

        if (response.status == 200) {
          setBooks([response.data]);
        }
      } catch (error) {
        console.log("Fail to get Book", error);
      }
    }
    if (id !== 0) {
      getOneBook();
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>GetBookById</h3>
      <div className="form-group row">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          ID
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            ref={bookRef}
            placeholder="Enter BookId"
          />
          <br />
        </div>

        <p className="text-center">
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </p>
      </div>
      <div>
        <label htmlFor="title">Book Title: </label>
        &nbsp;
        {books.map((book) => (
          <span key={book.id}>
            <span>{book.title}</span>
          </span>
        ))}
      </div>
    </form>
  );
}
