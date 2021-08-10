import React from "react";
import { Card, Button } from "react-bootstrap";
import { RegisterBg } from "../../../assets";

const BlogItem = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={RegisterBg} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogItem;
