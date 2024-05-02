import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6008",
  headers: {
    "Content-Type": "application/json",
  },
});
