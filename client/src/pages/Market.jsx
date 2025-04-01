import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$49.99",
    image:
      "https://m.atcdn.co.uk/ect/media/w600/4b14ab0c7868451baf5912779f112f40.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$59.99",
    image:
      "https://m.atcdn.co.uk/ect/media/w600/4b14ab0c7868451baf5912779f112f40.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image:
      "https://m.atcdn.co.uk/ect/media/w600/4b14ab0c7868451baf5912779f112f40.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$89.99",
    image:
      "https://m.atcdn.co.uk/ect/media/w600/4b14ab0c7868451baf5912779f112f40.jpg",
  },
];

function Market() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">
                  <Link
                    style={{ color: "white", fontWeight: "bolder" }}
                    to="payment"
                  >
                    Buy
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Market;
