import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { useHistory } from "react-router";
import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  // pemanggilan state lokal bukan dari redux
  // const [dataBlog, setDataBlog] = useState([]);
  // inisialisasi state global dari redux
  const { dataBlogs, name } = useSelector((state) => state);
  console.log("Data Blogs", dataBlogs);

  const dispatch = useDispatch();
  useEffect(() => {
    // memanggil action redux dengan dispatch
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

    axios
      .get("http://localhost:4000/v1/blog/posts?page=1&perPage=2")
      .then((result) => {
        console.log("result", result.data);
        const responAPI = result.data;

        // setDataBlog(responAPI.data) [pemanggilan state lokal];
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responAPI.data });
      })
      .catch((err) => {
        Next(err);
      });
  }, [dispatch]);
  const history = useHistory();
  return (
    <Container className="p-4">
      <p>{name}</p>
      <Button
        variant="primary"
        onClick={() => history.push("/create-blog")}
        size="md"
      >
        Create Blog
      </Button>
      <Row className="mt-3 justify-content-md-center">
        {dataBlogs.map((blog) => {
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
