import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import icon1 from "../imgs/cy.png";
import Home from "../pages/Home";
import Toast from "react-bootstrap/Toast";
function Navbars() {
  return (
    <div>
      <div>
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          className="px-3 border-bottom border-light"
        >
          <Container fluid>
            <Navbar.Brand href="/" style={{ paddingRight: "20px" }}>
              <img
                src={icon1}
                alt="Logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/message">Talk To Me</Link>
                </Nav.Link>
                <NavDropdown title="Message Me" id="basic-nav-dropdown">
                  <Toast style={{ width: "205px" }}>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">
                        Telegram: @jkhxczxccjkhk
                      </strong>
                    </Toast.Header>
                  </Toast>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbars;
