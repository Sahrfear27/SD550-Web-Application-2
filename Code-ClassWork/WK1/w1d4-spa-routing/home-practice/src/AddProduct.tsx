import React, { MouseEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
export default function AddProduct() {
  // const navigate = useNavigate();
  // const backToHome = (e: MouseEvent<HTMLButtonElement>) => {
  //   navigate("/");
  // };
  return (
    <div>
      <p>Inside Add Product</p>
      {/* <button onClick={backToHome}>Back</button> */}
    </div>
  );
}
/*
Note: When a back button is clicked here. The children inside home will lost their routes.


*/
