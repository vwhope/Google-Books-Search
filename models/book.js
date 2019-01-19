const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true }, // from Google Books API
    authors: { type: Array, required: true }, // from Google Books API
    description: { type: String, required: true }, // text from Google Books API
    image: { type: String }, // image url from Google Books API
    link: { type: String }// book info url from Google Books API
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;