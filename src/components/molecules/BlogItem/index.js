import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { title, content, image, name, date } = props;
  return (
    <Col className="justify-content-md-center">
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <small className="text-muted">
            {name} - {date}
          </small>
          <Card.Text>{content}</Card.Text>
          <Button
            variant="primary"
            onClick={() => history.push("/detail-blog")}
          >
            Detail Blog
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogItem;
