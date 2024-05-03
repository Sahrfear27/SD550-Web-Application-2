import path from "path";
import Home from "../Home";
import AddProduct from "../AddProduct";
import Child from "../Child";
import News from "../News";
import Message from "../Message";
import SecondChild from "../SecondChild";
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "child",
        element: <Child />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "second",
        element: <SecondChild />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/goToMessage",
    element: <Message />,
  },
];
