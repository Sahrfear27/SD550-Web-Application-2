import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Book } from "../../Types/type";
import "./Books.css";
import GlobalContex from "../../Contex/Contex";
import libraryServices from "../../Apis/Services/library.services";
import axios from "../../Apis/axios";
import { useNavigate } from "react-router-dom";
type Props = {
  data: Book;
};
export default function BookObj(props: Props) {
  const navigate = useNavigate();
  const { data } = props;
  const { author, book, setBook } = useContext(GlobalContex);

  const [selectedAuthor, setSelectedAuthor] = useState<string[] | undefined>(
    data.authors
  );

  // const [hoverBookId, setHorverBookId] = useState<string | null>(null);
  // handle the check bok to select
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const authorId = e.currentTarget.value;

    // Check if the array of author id include the id that is being checked
    if (selectedAuthor?.includes(authorId)) {
      const newArray = selectedAuthor.filter((id) => id !== authorId);
      setSelectedAuthor(newArray);
    } else {
      if (selectedAuthor) {
        setSelectedAuthor([...selectedAuthor, authorId]);
      } else {
        // Add new author id that does not exist
        setSelectedAuthor([authorId]);
      }
    }
  };
  const handleUpdate = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const obj = { ...data, authors: selectedAuthor };
      const response = await libraryServices.addAuthorToBook(data.id, obj);
      if (response.status === 200) {
        alert("Author updated successifully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (window.confirm("Are you sure")) {
        const response = await libraryServices.deleteBook(data.id);
        if (response.status == 200) {
          const updatedBooks = book.filter((books) => books.id !== data.id);
          setBook(updatedBooks);
        }
      }
    } catch (error) {}
  };
  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/edit", {
      state: data,
    });
  };

  const handleBorrow = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const newBook = { ...data };
      if (!newBook.catalog || newBook.catalog.availableCopies == 0) {
        return alert("Cannot Borrow this book");
      }
      if (newBook.catalog) {
        newBook.catalog.availableCopies -= 1;
      }
      const response = await libraryServices.updatedBook(newBook.id, newBook);
      if (response.status == 200) {
        const bookIndex = book.findIndex(
          (stateBook) => stateBook.id == newBook.id
        );
        if (bookIndex !== -1) {
          book[bookIndex] = newBook;
        }
        setBook([...book]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-15">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Isbn</th>
                  <th>Format</th>
                  <th>Summary</th>
                  <th>Publisher</th>
                  <th>Inventory</th>
                  <th>Add Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.title}</td>
                  <td>{data.genre}</td>
                  <td>{data.isbn}</td>
                  <td>{data.format}</td>
                  <td>{data.summary}</td>
                  <td>{data.publisher}</td>
                  <td>
                    {data.catalog && (
                      <div>
                        <label htmlFor="availablecopies">
                          Available Copies:{data.catalog.availableCopies}
                        </label>
                        <br />
                        <label htmlFor="numberofcopies">
                          Number of copies:{data.catalog.numberOfCopies}
                        </label>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={handleBorrow}
                        >
                          Borrow
                        </button>
                      </div>
                    )}
                  </td>

                  <td>
                    {author.map((authors) => (
                      <div key={authors.id}>
                        <input
                          type="checkbox"
                          value={authors.id}
                          id={authors.id}
                          onChange={handleSelect}
                          checked={selectedAuthor?.includes(authors.id)}
                        />
                        <label htmlFor="firstname">{authors.firstname}</label>
                      </div>
                    ))}
                    <button
                      className="btn btn-success btn-sm"
                      onClick={handleUpdate}
                    >
                      Add
                    </button>
                  </td>
                  <td>
                    <div>
                      <button
                        onClick={handleDelete}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <br />
                    <div>
                      <button
                        onClick={handleEdit}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
