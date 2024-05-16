import axios from "../axios";
import http from "../axios";

// // Login
// async function login(email: string) {
//   try {
//     const res = await http.post("/users/login", email);
//     if (res.status == 200 && res.data.success) {
//       console.log(res.data.data);
//       return res.data.data;
//     }
//   } catch (error) {}
// }

// // Get produdt
// async function getProduct(token: string) {
//   // try {
//   //     axios.def
//   // } catch (error) {
//   //     console.log(error)
//   // }
// }

// export default {
//   login,
// };
export async function login(email: string) {
  try {
    const res = await http.post("/users/login", { email });
    if (res.status === 200 && res.data.success) {
      return res.data.data; //return jwt
    }
  } catch (error) {}
  return null;
}

export async function getAllProducts(token: string) {
  try {
    // pass the header so the the request contains the token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await http.get("/products");
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
