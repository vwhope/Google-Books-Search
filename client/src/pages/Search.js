import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header"


class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: "",
    deleted: false
  };

  // When the component mounts, get a list of all "The Stand" books and update this.state.books
  componentDidMount() {
    // API.search()
    //   .then(res => this.setState({ books: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }

        // I still have to deal with authors[]
        // res.data.items are the books to push into newArray
        // see data here console.log(res.data.items);
        const newArray = [];
        res.data.items.forEach(item => {
          let book = {};
          book.id = item.id;
          book.title = item.volumeInfo.title;
          book.authors = item.volumeInfo.authors;
          book.image = item.volumeInfo.imageLinks.thumbnail;
          book.description = item.volumeInfo.description;
          book.link = item.volumeInfo.infoLink;
          newArray.push (book);
        })

        // refresh screen with new books
        this.setState({ results: newArray, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

////

handleViewBook = event => {
  event.preventDefault();
  console.log("this is handleViewBook")
};

handleSaveBook = event => {
  event.preventDefault();
  console.log("this is handleSaveBook");
  // ??? I need to toggle Save/Delete buttons but do I do it here?
  console.log(this.state.title); // is undefined - why???
  console.log(this.state.authors); // is undefined - why???
    if (this.state.title && this.state.description) {
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };



///

  render() {
    return (
      <div>
        <Container fluid>
        {/* <Container style={{ minHeight: "100%", marginLeft: 50 }}> */}
          <Row>
            <Col size="md-12">
              <Header />
            </Col>
          </Row>
          <h3>Book Search</h3>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults
            handleViewBook={this.handleViewBook}
            handleSaveBook={this.handleSaveBook}
            results={this.state.results}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
