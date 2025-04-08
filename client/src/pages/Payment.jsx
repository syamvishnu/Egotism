import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";
import walletPic from "../imgs/wallet.jpg";

function CryptoPayment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    walletAddress: "0x54853d1b3f1b002803fc75e56bf2abc6b454dfg",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.address
    ) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Container className="mt-4">
      {/* FORM SECTION */}
      {!isSubmitted && (
        <Card className="shadow-lg p-4">
          <h4 className="fw-bold">Checkout</h4>
          <p className="text-muted">
            Please enter your details before proceeding.
          </p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Continue
            </Button>
          </Form>
        </Card>
      )}

      {isSubmitted && (
        <Container className="mt-4" fluid>
          <Card className="shadow-lg p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold">
                <Image
                  src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                  width="30"
                  className="me-2"
                />
                7.85 USDT
              </h4>
            </div>
            <p className="text-muted">7.78 USD</p>
            <p className="text-muted">Network • ETH</p>

            <Card className="p-3">
              <Row>
                <Col md={3} className="text-center">
                  <Image
                    src={walletPic}
                    width="100"
                    height="100"
                    className="border rounded"
                  />
                </Col>
                <Col md={9}>
                  <p className="fw-bold">Recipient's Wallet Address</p>
                  <div className="d-flex align-items-center">
                    <span className="text-muted small me-2">
                      0x159DCf61a39384Dc59CE1b24e9816a676C87BD11
                    </span>
                  </div>
                  <p className="text-muted small">
                    When your payment status changes, we'll send you a
                    notification
                  </p>
                </Col>
              </Row>
            </Card>
          </Card>
        </Container>
      )}
    </Container>
  );
}

export default CryptoPayment;
