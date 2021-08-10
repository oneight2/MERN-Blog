import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import { BlogItem } from "../../components";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <Container className="p-4">
      <Button
        variant="primary"
        onClick={() => history.push("/create-blog")}
        size="md"
      >
        Create Blog
      </Button>
      <Row className="mt-3 center">
        <Col>
          <BlogItem />
        </Col>
        <Col>
          <BlogItem />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" size="md">
              Previous
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" size="md">
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
