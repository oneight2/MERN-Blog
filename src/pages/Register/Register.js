import React from "react";
import "./register.scss";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { RegisterBg } from "../../assets";
import { useHistory } from "react-router";
// import { Input } from "../../components";

const Register = () => {
  const history = useHistory();
  return (
    <Row className="auth">
      <Col md={8}>
        <img src={RegisterBg} className="bg-image" />
      </Col>
      <Col md={4}>
        <Container>
          <Form>
            <h3 className="mt-5">Sign Up</h3>
            <Form.Group class="mb-3 mt-5" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter FullName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="md">
                Submit
              </Button>
            </div>
          </Form>
          <p className="text-center mt-2">
            Sudah punya akun?{" "}
            <a onClick={() => history.push("/login")}>Login</a>
          </p>
        </Container>
      </Col>
    </Row>
  );
};

export default Register;
