import http from "../axios";
import { Books } from "../../Types/type";
type NuwBook ={
    title: "",
    genre: "",
    isbn: "",
    format: "",
    summary: "",
}
// Get all the books
const getBooks =()=>{
    return http.get("/books")
}


// Add Books
const addBooks = (book:Books)=>{
    return http.post("/books",book)
}
// Get Books by id
const getOneBook =(id:number)=>{
    return http.get(`/books/${id}`)
}

// Update Book by id
const updateBooks =(id:number,newBook:NuwBook)=>{
    return http.put(`/books/${id}`,newBook)
}
export default{
    getBooks,
    addBooks,
    getOneBook,
    updateBooks
}

