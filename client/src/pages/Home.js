import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30, marginLeft: 50}}>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;