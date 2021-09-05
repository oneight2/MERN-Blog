import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  FloatingLabel,
  Card,
  Image,
} from "react-bootstrap";
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/redux/action";

import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, content } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    // ubah ke settingan update data
    if (id) {
      setIsUpdate(true);
      axios
        .get(`https://test-mern-api.herokuapp.com/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          // tampilkan data update
          dispatch(setForm("title", data.title));
          dispatch(setForm("content", data.content));
          dispatch(
            setImgPreview(`https://test-mern-api.herokuapp.com/${data.image}`)
          );
        })
        .catch((err) => {
          console.log("err:", err);
        });
    }
  }, []);

  const onSubmit = () => {
    if (isUpdate) {
      const id = props.match.params.id;
      updateToAPI(form, id);
    } else {
      postToAPI(form);
    }
    window.location.replace("https://test-mern-api.herokuapp.com/");
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>{isUpdate ? "Update" : "Create"} Postingan</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Post Title"
                  value={title}
                  onChange={(e) => dispatch(setForm("title", e.target.value))}
                />
              </Form.Group>
              {imgPreview && <Image src={imgPreview} thumbnail width="200px" />}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Gambar</Form.Label>
                <Form.Control type="file" onChange={(e) => onImageUpload(e)} />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Isi Blog">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={content}
                  onChange={(e) => dispatch(setForm("content", e.target.value))}
                />
              </FloatingLabel>
              <div className="d-flex justify-content-end">
                <Button variant="primary" className="mt-5" onClick={onSubmit}>
                  {isUpdate ? "Update" : "Simpan"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default withRouter(CreateBlog);
