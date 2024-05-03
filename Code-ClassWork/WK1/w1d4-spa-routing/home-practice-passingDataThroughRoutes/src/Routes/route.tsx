import Home from "../Home";
import AddProduct from "../AddProduct-Location";
import EditProducts from "../EditProducts-Params";
import EditProduct2 from "../EditProduct2-SearchParams";
export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/edit-product/:id",
    element: <EditProducts />,
  },
  {
    path: "/edit-product2/:id",
    element: <EditProduct2 />,
  },
];
