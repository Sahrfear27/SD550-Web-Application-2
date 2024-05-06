import "bootstrap/dist/css/bootstrap.css";
import routes from "./Routes/routes";
import { useRoutes } from "react-router-dom";
import GlobalContex from "./Contex/Contex";
import { useEffect, useState } from "react";
import { Author, Book, Publiser } from "./Types/type";
import libraryServices from "./Apis/Services/library.services";
function App() {
  const element = useRoutes(routes);
  const [book, setBook] = useState<Book[]>([]);
  const [author, setAuthor] = useState<Author[]>([]);
  const [newPublisher, setNewPublisher] = useState<Publiser[]>([]);
  //load the book list
  const loadAllBooks = async () => {
    try {
      const response = await libraryServices.getBook();
      if (response.status == 200) {
        setBook(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Load Author
  const loadAllAuthors = async () => {
    try {
      const response = await libraryServices.getAuthor();
      if (response.status == 200) {
        setAuthor(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // load Publisher
  const loadPublisher = async () => {
    try {
      const response = await libraryServices.getPublishers();
      if (response.status == 200) {
        console.log(response.data);
        setNewPublisher(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadAllBooks();
    loadAllAuthors();
    loadPublisher();
  }, []);
  return (
    <GlobalContex.Provider
      value={{
        book,
        setBook,
        author,
        setAuthor,
        newPublisher,
        setNewPublisher,
      }}
    >
      <div className="text-center">
        <h4>Integrated Library Management System</h4>
        {element}
      </div>
    </GlobalContex.Provider>
  );
}

export default App;
