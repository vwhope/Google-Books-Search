import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

   // Get all books that meet Query Search criteria using googlebooks api
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Get ALL books in googlebooks DB (collection books)
  getBooks: function() {
  // return axios.get("/api/saved"); // tried /books /api/books
    return axios.get("/api/books");
  },
  // Get A book by ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Delete book by ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};
