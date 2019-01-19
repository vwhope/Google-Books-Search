import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Header() {
  return (
    <div>
      <Container style={{ marginTop: 30, marginLeft: 50}}>
        <Row>
          <Col size="md-12">
            <h1>(React) Google Books Search</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3 className="subtext">
              Search for and Save Books of Interest
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
