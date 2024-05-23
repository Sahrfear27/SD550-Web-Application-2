import axios from "axios";

export async function getAllProducts(token: string) {
  try {
    // pass the header so the the request contains the token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get("http://localhost:6000/products");
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
