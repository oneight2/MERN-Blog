import axios from "axios";
import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  FloatingLabel,
  Card,
  Image,
} from "react-bootstrap";

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const onSubmit = () =>{
    console.log('title:', title)
    console.log('content:', content)
    console.log('image:', image)

    const data = new FormData();
    data.append('title', title)
    data.append('content', content)
    data.append('image', image)

    axios.post('http://localhost:4000/v1/blog/post', data,{
      headers:{
        'content-type' : 'multipart/form-data'
      }
    }).then(res =>{
      console.log('post success:', res)
    }).catch(err =>{
      console.log('err', err)
    })
  }
  const onImageUpload = (e) =>{
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>Tambah Postingan</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>
              {imagePreview && <Image src={imagePreview} thumbnail width="200px" /> }
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
                  onChange={(e) => setContent(e.target.value)}
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
