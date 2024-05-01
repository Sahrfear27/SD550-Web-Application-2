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
// Get Books by id
const getOneBook =(id:number)=>{
    return http.get(`/books/${id}`)
}

// Update Book by id
const updateBooks =(id:number,newBook:Books)=>{
    return http.put(`/books/${id}`,newBook)
}

// DeleteById
const deleteBook = (id:number)=>{
    return http.delete(`/books/${id}`)
}
export default{
    getBooks,
    addBooks,
    getOneBook,
    updateBooks,
    deleteBook
}

