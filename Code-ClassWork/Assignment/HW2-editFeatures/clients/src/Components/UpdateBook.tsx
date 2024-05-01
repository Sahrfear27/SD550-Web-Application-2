import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Books } from "../Types/type";
import booksServices from "../apis/services/books.services";

type Props = {
  onUpdate: (newBook: Books) => void;
};
export default function UpdateBook(props: Props) {
  const { onUpdate } = props;
  const [newBook, setNewBook] = useState<Books>({
    id: 0,
    title: "",
    genre: "",
    isbn: "",
    format: "",
    summary: "",
  });

  const { id } = newBook;
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    // setNewBook((prevState) => {
    //   if (name == "title") {
    //     return { ...prevState, title: value };
    //   } else {
    //     return { ...prevState };
    //   }
    // });
    setNewBook({ ...newBook, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await booksServices.updateBooks(id, newBook);
      console.log(response.data);
      if (response.status == 201) {
        onUpdate(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4 className="text-center">Update Book By Id</h4>
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
              placeholder="Enter ID"
              name="id"
              value={newBook.id}
              onChange={handleInput}
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
              value={newBook.title}
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
              value={newBook.genre}
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
              value={newBook.isbn}
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
              value={newBook.format}
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
              value={newBook.summary}
              onChange={handleInput}
              placeholder="Enter Summary"
            />
          </div>
        </div>
        <br />
        <br />
        <p className="text-center">
          <button type="submit" className="btn btn-success ">
            Update
          </button>
        </p>
      </form>
    </div>
  );
}
