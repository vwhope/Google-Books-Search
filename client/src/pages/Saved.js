import React, { Component } from "react";
import Alert from "../components/Alert";
import DeleteBtn from "../components/DeleteBtn";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

const linkStyle = {
  color: 'blue',
  cursor: 'pointer',
  // textDecoration: 'none',
  marginLeft: 25,
  marginBottom: 25,
  paddingTop: 25,
  float: 'left'
}
const titleStyle ={
  marginLeft: 25,
  marginTop: 15
}
const authorStyle = {
  marginLeft: 25,
  marginTop: 10,
  fontSize: 16
}
const descStyle = {
  fontSize: 14,
  marginTop: 10,
  marginLeft: 25,
  marginRight: 25,
}
const imageStyle = {
  float: 'left',
  clear: 'all',
  marginLeft: 25,
  marginTop: 10,
  marginRight: 25,
}

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          authors: [],
          description: "",
          image: "",
          link: ""
         })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "100%", marginLeft: 50 }}>
          <Row>
            <Col size="md-12">
              <Header />
            </Col>
          </Row>
          <h3>Saved Books</h3>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <Row>
            <Col size="md-12">
            <h3>You have {this.state.books.length} saved books.</h3>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link
                        // style={ linkStyle }
                        to={"/books/" + book._id}>
                      </Link>
                      <img style={ imageStyle } src={book.image} alt="book" />
                      <div style={ titleStyle }>
                        <strong>{book.title}</strong>
                        </div>
                        <div style={ authorStyle }> Written by: {book.authors}
                        </div>
                      <div style={descStyle}> {book.description} </div>
                      <a style={linkStyle} href={book.link}>Book Info</a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
