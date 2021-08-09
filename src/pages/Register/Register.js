import React from "react";
import "./register.css";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { RegisterBg } from "../../assets";
// import { Input } from "../../components";

const Register = () => {
  return (
    <Row>
      <Col md={8}>
        <img src={RegisterBg} className="bg-image" />
      </Col>
      <Col md={4}>
        <Container >
          <Form >
            <h3 className="mt-5">Sign Up</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default Register;
