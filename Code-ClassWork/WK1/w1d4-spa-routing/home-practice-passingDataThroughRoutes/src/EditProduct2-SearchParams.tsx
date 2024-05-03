import React, { MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EditProduct2() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const goBack = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  };
  return (
    <div>
      <h4>Edit Product 2</h4>
      <p>{searchParams.get("firstname")}</p>
      <p>{searchParams.get("lastname")}</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
