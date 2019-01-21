import React from "react";
import "./style.css";

// the data from the Google Books API has already been parsed
// by the time it is passed into props here.
// if you don't get the correct item - go back to Search.js
// and check the mapping of the object there.
function SearchResults(props) {
  console.log(props);


  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        // console.log(result);
        <li key={result.id} className="list-group-item">

          <div id="image-left">
            <img alt="BookImage" src={result.image} className="img-fluid" />
          </div>

          <div id="text-block">
            <p id="title">{result.title}</p>
            <p id="authors">Written By: {result.authors}</p>
            <p id="description">{result.description}</p>
            <a id="info-link" href={result.link} target="blank">View</a>
            <button type="button" id="info-link" onClick={props.handleViewBook} className="button-view">
            View
            </button>
            <button type="button" id="save-to-db" onClick={props.handleSaveBook} className="button-save">
            Save
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
