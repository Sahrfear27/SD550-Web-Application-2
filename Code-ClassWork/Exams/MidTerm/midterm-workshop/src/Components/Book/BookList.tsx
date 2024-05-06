import React, {
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { nanoid } from "nanoid";
import GlobalContex from "../../Contex/Contex";
import { useNavigate } from "react-router-dom";
import BookObj from "./BookObj";

export default function BookList() {
  const navigate = useNavigate();
  const { book } = useContext(GlobalContex);
  const [inputText, setInputText] = useState("");
  const [displayBooks, setDisplayBooks] = useState(book);

  useEffect(() => {
    setDisplayBooks(book);
  }, [book]);
  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    // Return an array of all the books that start with the input value
    const searchedBook = book.filter((books) => {
      return books.title
        .toLowerCase()
        .startsWith(inputText.trim().toLowerCase());
    });
    setDisplayBooks(searchedBook);
  };

  const goAddBook = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/add");
  };

  return (
    <div>
      <h4>Book List</h4>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
      &nbsp;
      <button className="btn btn-success btn-sm" onClick={handleSearch}>
        Search
      </button>
      <br />
      <br />
      {displayBooks.map((books) => (
        <BookObj key={nanoid()} data={books} />
      ))}
      <button className="btn btn-success btn-sm" onClick={goAddBook}>
        Add New Book
      </button>
    </div>
  );
}
