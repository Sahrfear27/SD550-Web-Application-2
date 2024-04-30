import React, { ChangeEvent, FormEvent, useState } from "react";
import { Books } from "../Types/type";
import { title } from "process";
import booksServices from "../apis/services/books.services";
import axios from "../apis/axios";
type Props = {
  onAddBook: (newBook: Books) => void;
};
export default function AddBooks(props: Props) {
  const { onAddBook } = props;
  const [newBooks, setNewBooks] = useState<Books>({
    id: 0,
    title: "",
    genre: "",
    isbn: "",
    format: "",
    summary: "",
  });
  const { id, title, genre, isbn, format, summary } = newBooks;
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewBooks({ ...newBooks, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await booksServices.addBooks({
      id,
      title,
      genre,
      isbn,
      format,
      summary,
    });

    console.log(response.data);
    if (response.status == 201) {
      onAddBook(response.data);
      setNewBooks({
        id: 0,
        title: "",
        genre: "",
        isbn: "",
        format: "",
        summary: "",
      });
    }
  };
  return (
    <div>
      <h3 className="text-center">Add Books</h3>

      <form onSubmit={handleSubmit}>
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
              name="id"
              value={newBooks.id}
              onChange={handleInput}
              placeholder="Enter ID"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              name="title"
              value={newBooks.title}
              onChange={handleInput}
              placeholder="Enter Title"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Genre
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              name="genre"
              value={newBooks.genre}
              onChange={handleInput}
              placeholder="Enter Genre"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Isbn
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              name="isbn"
              value={newBooks.isbn}
              onChange={handleInput}
              placeholder="Enter isbn"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Format
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              name="format"
              value={newBooks.format}
              onChange={handleInput}
              placeholder="Enter Format"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Summary
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              name="summary"
              value={newBooks.summary}
              onChange={handleInput}
              placeholder="Enter Summary"
            />
          </div>
        </div>
        <br />

        <br />

        <button type="submit" className="btn btn-success ">
          Success
        </button>
      </form>
    </div>
  );
}
