import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          {/* <img alt="Book" src={result} className="img-fluid" /> */}
          {/* <p>{result.book.title}</p> */}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;

// ??? still need to map the book properties???
// ??? I have them in BookDetail ???
// return (
//   <ul>
//     {this.state.books.map((book, index) => (
//       <li key={index}>{book.title}</li>
//     ))}
//   </ul>
// );