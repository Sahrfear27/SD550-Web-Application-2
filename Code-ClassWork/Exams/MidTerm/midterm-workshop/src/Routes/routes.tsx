import path from "path";
import AddNewBook from "../Components/Book/AddNewBook";
import BookList from "../Components/Book/BookList";
import { Navigate } from "react-router-dom";
import AddAuthor from "../Components/Author/AddAuthor";
import AuthorList from "../Components/Author/AuthorList";
import Home from "../Components/Home/Home";
import EditBook from "../Components/Book/EditBook";
import PublisherList from "../Components/Publisher/PublisherList";
import AddPublisher from "../Components/Publisher/AddPublisher";
export default [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/books",
    element: <BookList />,
  },
  {
    path: "/add",
    element: <AddNewBook />,
  },
  {
    path: "/addAuthor",
    element: <AddAuthor />,
  },
  {
    path: "/author",
    element: <AuthorList />,
  },
  {
    path: "/publisher",
    element: <PublisherList />,
  },
  {
    path: "/addPublisher",
    element: <AddPublisher />,
  },
  {
    path: "/edit",
    element: <EditBook />,
  },
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "*",
    element: <p>Page is not found</p>,
  },
];
