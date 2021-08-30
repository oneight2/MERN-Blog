import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { BlogItem } from "../../components";
import { useHistory } from "react-router";
import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const history = useHistory();
  // inisialisasi state global dari redux
  const { dataBlog } = useSelector((state) => state.homeReducer);
  console.log("Data Blogs", dataBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  return (
    <Container className="p-4">
      {/* <p>{name}</p> */}
      <Button
        variant="primary"
        onClick={() => history.push("/create-blog")}
        size="md"
      >
        Create Blog
      </Button>
      <Row className="mt-3 justify-content-md-center">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              content={blog.content}
              image={`http://localhost:4000/${blog.image}`}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
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
