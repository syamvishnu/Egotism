import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from "../imgs/cy.png";
import Toast from "react-bootstrap/Toast";

function Navbars() {
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-3 border-bottom border-light"
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="/" className="me-3">
            <img
              src={icon1}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Links & Centered Title */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/message">
                Talk_To_Me
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

            {/* Centered Title */}
            <div
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <h1 style={{ color: "white", margin: "0", fontWeight: "bolder" }}>
                Demo Website for OSINT CTF{" "}
              </h1>
              <span style={{ color: "white" }}>Powered by: CyberX</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default Navbars;
