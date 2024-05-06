import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import libraryServices from "../../Apis/Services/library.services";
import GlobalContex from "../../Contex/Contex";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
export default function AddNewBook() {
  const navigate = useNavigate();
  const { book, setBook } = useContext(GlobalContex);
  const [inputValue, setInputValue] = useState({
    id: nanoid(),
    title: "",
    genre: "",
    isbn: "",
    format: "",
    summary: "",
    publisher: 0,
    catalog: { numberOfCopies: 0, availableCopies: 0 },
  });
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleCatalog = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    const updatedCatalog = { ...inputValue.catalog, [name]: parseInt(value) };
    setInputValue({ ...inputValue, catalog: updatedCatalog });
  };
  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (
        !(
          inputValue.id == "" ||
          inputValue.title == "" ||
          inputValue.genre == "" ||
          inputValue.isbn == "" ||
          inputValue.format == "" ||
          inputValue.summary == "" ||
          inputValue.publisher == 0 ||
          inputValue.catalog.numberOfCopies == 0 ||
          inputValue.catalog.availableCopies == 0
        )
      ) {
        const response = await libraryServices.addNewBook(inputValue);
        if (response.status == 201) {
          // console.log(response.data);
          setBook([...book, response.data]);
          setInputValue({
            id: "",
            title: "",
            genre: "",
            isbn: "",
            format: "",
            summary: "",
            publisher: 0,
            catalog: { numberOfCopies: 0, availableCopies: 0 },
          });
          navigate("/books");
        }
      } else {
        alert("Please Input a Value");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center">
      <h4>Add New Book To System</h4>
      {/* <input
        type="text"
        placeholder="Enter Id"
        name="id"
        value={inputValue.id}
        onChange={handleInputValue}
        disabled
      /> */}
      <br />
      <input
        type="text"
        placeholder="Book Title"
        name="title"
        value={inputValue.title}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Genre"
        name="genre"
        value={inputValue.genre}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="text"
        placeholder="Entern Isbn"
        name="isbn"
        value={inputValue.isbn}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="text"
        placeholder="Book Format"
        name="format"
        value={inputValue.format}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="text"
        placeholder="Book Summary"
        name="summary"
        value={inputValue.summary}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="number"
        placeholder="Number of Publisher"
        name="publisher"
        value={inputValue.publisher}
        onChange={handleInputValue}
      />
      <br />
      <input
        type="number"
        placeholder="Number of Copies"
        name="numberOfCopies"
        value={inputValue.catalog.numberOfCopies}
        onChange={handleCatalog}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Avalilble Copies"
        name="availableCopies"
        value={inputValue.catalog.availableCopies}
        onChange={handleCatalog}
      />
      <br />
      <br />
      <button onClick={handleAdd} className="btn btn-success btn-sm">
        Add
      </button>
    </div>
  );
}
