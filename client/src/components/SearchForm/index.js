import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Book</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder=" Harry Potter"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
