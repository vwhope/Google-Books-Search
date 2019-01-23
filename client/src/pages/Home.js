import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header";
import homePhoto from "../library.jpg";

const imageStyle = {
  position: 'center',
  textAlign:'center',
}

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 0, marginLeft: 0}}>
        <Row>
          <Col size="md-12">
            <Header />
            <div style={imageStyle} >
            <img src={homePhoto} alt="book" width='70%' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
