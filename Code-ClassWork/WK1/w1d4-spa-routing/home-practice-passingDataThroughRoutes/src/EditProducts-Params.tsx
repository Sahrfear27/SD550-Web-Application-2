import React, { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProducts() {
  const navigate = useNavigate();
  const params = useParams();
  const goBack = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  };

  return (
    <div>
      <h4>Edit Products</h4>
      <p>Product id: {params.id}</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
