import React from "react";
import '../styles/home.css'
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
       
        <div>
          <h1>Share the world with your friends</h1>
          <p>Chat App lets you connect the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get started
              <span>
                <i className="fas fa-comments homeMessageIcon"></i>
              </span>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col
        md={6} className="homeBg"></Col>
    </Row>
  );
};

export default Home;
