import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

/*
Passing data through routes
1.Location:  Want to send an object data from home to add Product
2. Params:
3. SearchParams
*/
export default function Home() {
  const navigate = useNavigate();
  const goToAddProduct = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/add", {
      state: { firstname: "Sahrfear", lastname: "Macarthy" },
    });
  };
  const goToEditProduct = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/edit-product/3");
  };
  const goToEditProduct2 = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/edit-product2/4?firstname=Sahrfear&lastname=macarthy");
  };

  return (
    <div>
      <p>Home Page</p>
      <button onClick={goToAddProduct}>Add Product</button>
      <br />
      <br />
      <button onClick={goToEditProduct}>Edit Product</button>
      <br />
      <br />
      <button onClick={goToEditProduct2}>Edit Product2</button>
    </div>
  );
}
