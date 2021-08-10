import React from "react";
import {
  Form,
  Button,
  Container,
  FloatingLabel,
  Card,
  Image,
} from "react-bootstrap";
import { RegisterBg } from "../../assets";
import { useHistory } from "react-router";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>Tambah Postingan</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Post Title" />
              </Form.Group>
              <Image src={RegisterBg} thumbnail width="200px" />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Gambar</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Isi Blog">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="mt-5">
                  POSTING
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default CreateBlog;
