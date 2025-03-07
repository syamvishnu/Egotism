import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const readPage = () => {
    navigate("message");
  };
  return (
    <Container fluid className="profile-container">
      <Row className="fullscreen-container">
        {/* Left Section */}
        <Col md={6} className="left-section">
          <h1 className="name">Syam Vishnu</h1>
          <p className="description">
            I am a passionate MERN Stack Developer with expertise in building
            dynamic, scalable, and high-performance web applications using
            MongoDB, Express.js, React.js, and Node.js.
          </p>

          <h3 className="general-info">General Info</h3>
          <p>
            <strong>Date of Birth:</strong> June 18, 19XX
          </p>
          <p>
            <strong>Address:</strong> No. XXX Ernakulam, Kerala, IN
          </p>
          <p>
            <strong>E-mail:</strong> sxxxxxxxxu@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 99xxxxxxx7
          </p>

          {/* Buttons */}
          <div className="buttons">
            <Button variant="outline-dark" className="me-2">
              Download CV
            </Button>
            <Button variant="outline-dark" className="me-2" onClick={readPage}>
              Talk Me
            </Button>
          </div>
        </Col>

        {/* Right Section */}
        <Col md={6} className="right-section">
          <img
            src="https://preview.redd.it/mohanlals-jailer-look-v0-8chizw0y0zxa1.jpg?width=1080&crop=smart&auto=webp&s=66b16935f5068f7c47d45cf753393f5e33e1b558"
            alt="Maria Williams"
            className="profile-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
