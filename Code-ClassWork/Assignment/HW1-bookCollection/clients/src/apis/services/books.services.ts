import http from "../axios";
import { Books } from "../../Types/type";
// Get all the books
const getBooks =()=>{
    return http.get("/books")
}


// Add Books
const addBooks = (book:Books)=>{
    return http.post("/books",book)
}
export default{
    getBooks,
    addBooks
}