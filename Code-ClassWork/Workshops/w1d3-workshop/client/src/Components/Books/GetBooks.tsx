import React, { useContext } from "react";
import GlobalContex from "../../Contex";

export default function GetBooks() {
  // Use the state books
  const { books } = useContext(GlobalContex);
  console.log(books);
  return (
    <div>
      <h4>Get All Books</h4>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}
