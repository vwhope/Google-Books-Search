import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Header from "../components/Header"

function Saved() {
  return (
    <div>
      <Container style={{ marginTop: 30, marginLeft: 50 }}>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Saved Books</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
