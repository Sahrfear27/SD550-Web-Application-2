import React, { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const goBakToHome = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  };
  console.log(location);
  return (
    <div>
      <p>Inside Add Product</p>
      <button onClick={goBakToHome}>Back</button>
      <p>{location.state.firstname}</p>
      <p>{location.state.lastname}</p>
    </div>
  );
}
