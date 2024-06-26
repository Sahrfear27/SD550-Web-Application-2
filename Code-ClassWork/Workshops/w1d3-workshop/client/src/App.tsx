import "bootstrap/dist/css/bootstrap.css";
import AddNewBook from "./Components/Books/AddNewBook";
import { Book } from "./Types/types";
import { useEffect, useState } from "react";
import GlobalContex from "./Contex";
import GetBooks from "./Components/Books/GetBooks";
import libraryServices from "./apis/services/library.services";
import AddAuthor from "./Components/Authors/AddAuthor";
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  // Load the book during mounting time
  const loadBooks = async () => {
    try {
      const response = await libraryServices.getBook();
      if (response.status == 200) {
        setBooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div className="text-center">
      <GlobalContex.Provider value={{ books, setBooks }}>
        <h4>Integrated Library Management System (ILMS)</h4>
        <AddNewBook />
        <br />
        <GetBooks />
        <br />
        <AddAuthor />
      </GlobalContex.Provider>
    </div>
  );
}

export default App;
