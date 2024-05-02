import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Book } from "../../Types/types";
import libraryServices from "../../apis/services/library.services";
import GlobalContex from "../../Contex";
export default function AddNewBook() {
  const [book, setNewBook] = useState<Book>({
    id: "",
    title: "",
    genre: "",
    isbn: "",
    format: "",
    summary: "",
    authors: [],
  });
  const { id, title, genre, isbn, format, summary } = book;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewBook({ ...book, [name]: value });
  };
  const { books, setBooks } = useContext(GlobalContex);
  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await libraryServices.addBook({
        id,
        title,
        genre,
        isbn,
        format,
        summary,
      });
      if (response.status == 201) {
        setBooks([...books, response.data]);
        setNewBook({
          id: "",
          title: "",
          genre: "",
          isbn: "",
          format: "",
          summary: "",
          authors: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4>Add New Book</h4>
      <input
        type="text"
        placeholder="Book Id"
        name="id"
        value={book.id}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={book.title}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Genre"
        name="genre"
        value={book.genre}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Isbn"
        name="isbn"
        value={book.isbn}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Format"
        name="format"
        value={book.format}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Summary"
        name="summary"
        value={book.summary}
        onChange={handleInput}
      />
      &nbsp;
      <button onClick={handleAdd} className="btn btn-success">
        Add
      </button>
    </div>
  );
}
