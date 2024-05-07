import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   const goToAdd = (e: MouseEvent<HTMLButtonElement>) => {
//     // navigate("/add", {
//     //   state: { firstname: "Sahrfaar", lastName: "Macarthy" },
//     // });
//     navigate("/add", {
//       state: { firstname: "Sahrfear", lastname: "Macarthy" },
//     });
//   };
//   return (
//     <div>
//       <p>HomePage</p>
//       <button onClick={goToAdd}>Add Product</button>
//     </div>
//   );
// }

export default function Home() {
  const navigate = useNavigate();
  const goToAddProduct = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/add", {
      state: { firstname: "Sahrfear", lastname: "Macarthy" },
    });
  };
  // const goToEditProduct = (e: MouseEvent<HTMLButtonElement>) => {
  //   navigate("/edit-product/3");
  // };
  // const goToEditProduct2 = (e: MouseEvent<HTMLButtonElement>) => {
  //   navigate("/edit-product2/4?firstname=Sahrfear&lastname=macarthy");
  // };

  return (
    <div>
      <p>Home Page</p>
      <button onClick={goToAddProduct}>Add Product</button>
      <br />
      <br />
      {/* <button onClick={goToEditProduct}>Edit Product</button>
        <br />
        <br />
        <button onClick={goToEditProduct2}>Edit Product2</button> */}
    </div>
  );
}
