import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { title, content, image, name, date, _id, onDelete } = props;
  return (
    <Col className="justify-content-md-center">
      <Card className="m-auto card-lg">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <small className="text-muted">
            {name} - {date}
          </small>
          <Card.Text>{content}</Card.Text>
          <Button
            variant="primary"
            onClick={() => history.push(`/detail-blog/${_id}`)}
          >
            Detail Blog
          </Button>
          <Button
            variant="info"
            className="mx-2"
            onClick={() => history.push(`/create-blog/${_id}`)}
          >
            Edit Blog
          </Button>
          <Button variant="danger" onClick={() => onDelete(_id)}>
            Delete Blog
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogItem;
