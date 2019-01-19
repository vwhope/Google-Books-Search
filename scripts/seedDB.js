const mongoose = require("mongoose");
const db = require("../models");

// This is just a test to be sure I have things set up correctly
// It empties the Books collection and then inserts the book below

    // title: { type: String, required: true }, // from Google Books API
    // authors: { type: Array, required: true }, // from Google Books API
    // description: { type: String, required: true }, // text from Google Books API
    // image: { type: String }, // image url from Google Books API
    // link: { type: String }// book info url from Google Books API

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
     title: "The Hunger Games",
     authors: ["Suzanne Collins"],
     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
