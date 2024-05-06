import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6004",
  headers: {
    "Content-Type": "application/json",
  },
});
