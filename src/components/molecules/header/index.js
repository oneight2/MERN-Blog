import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => history.push("/")}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
        </Nav>
        <Button
          variant="primary"
          onClick={() => history.push("/login")}
          size="md"
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
