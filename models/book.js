const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// all data is retrieved from Google Books API query search
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String }// book info url
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;