import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  Form,
  Button,
  Container,
  FloatingLabel,
  Card,
  Image,
} from "react-bootstrap";
import { postToAPI, setForm, setImgPreview } from "../../config/redux/action";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, content} = form;
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = () =>{
    postToAPI(form)
  }
  const onImageUpload = (e) =>{
    const file = e.target.files[0];
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>Tambah Postingan</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Post Title" value={title} onChange={(e) =>setForm('title', e.target.value)} />
              </Form.Group>
              {imgPreview && <Image src={imgPreview} thumbnail width="200px" /> }
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Gambar</Form.Label>
                <Form.Control type="file" onChange={(e) => onImageUpload(e) } />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Isi Blog">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={content}
                  onChange={(e) => dispatch(setForm('content', e.target.value))}
                />
              </FloatingLabel>
              <div className="d-flex justify-content-end">
                <Button variant="primary" className="mt-5" onClick={onSubmit}>
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
