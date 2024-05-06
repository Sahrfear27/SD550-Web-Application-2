import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book } from "../../Types/type";
import libraryServices from "../../Apis/Services/library.services";
import GlobalContex from "../../Contex/Contex";
export default function EditBook() {
  const navigate = useNavigate();
  const location = useLocation();
  const { book, setBook } = useContext(GlobalContex);
  const [update, setUpdate] = useState<Book>(location.state);

  const handleAddBook = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUpdate({ ...update, [name]: value });
  };

  const handleCatalog = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    const updatedCatalog = { ...update.catalog, [name]: parseInt(value) };
    setUpdate({ ...update, catalog: updatedCatalog });
  };

  const handleEdit = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await libraryServices.updatedBook(update.id, update);
      if (response.status == 201) {
        const bookIndex = book.findIndex((bookIds) => bookIds.id == update.id);
        if (bookIndex !== -1) {
          book[bookIndex] = response.data;
          //   const updatedBook = [...book];
          //   setBook(updatedBook);
        }
        setBook([...book]);
      }
      navigate("/books");
    } catch (error) {}
  };

  return (
    <div className="text-center">
      <h4>Add New Book To System</h4>
      <input
        type="text"
        placeholder="Enter Id"
        name="id"
        value={update.id}
        onChange={handleAddBook}
        disabled
      />
      <br />
      <input
        type="text"
        placeholder="Book Title"
        name="title"
        value={update.title}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Genre"
        name="genre"
        value={update.genre}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="text"
        placeholder="Entern Isbn"
        name="isbn"
        value={update.isbn}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="text"
        placeholder="Book Format"
        name="format"
        value={update.format}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="text"
        placeholder="Book Summary"
        name="summary"
        value={update.summary}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="number"
        placeholder="Number of Publisher"
        name="publisher"
        value={update.publisher}
        onChange={handleAddBook}
      />
      <br />
      <input
        type="number"
        placeholder="Number of Copies"
        name="numberOfCopies"
        value={update.catalog?.numberOfCopies}
        onChange={handleCatalog}
      />
      <br />
      <input
        type="number"
        placeholder="Available Copies"
        name="availableCopies"
        value={update.catalog?.availableCopies}
        onChange={handleCatalog}
      />
      <br />
      <br />
      <button onClick={handleEdit} className="btn btn-success btn-sm">
        Update
      </button>
    </div>
  );
}
