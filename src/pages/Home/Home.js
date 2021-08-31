import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const history = useHistory();
  // statelokal membuat pagination menghiung halaman diberi nilai default 1
  const [counter, setCounter] = useState(1);
  // inisialisasi state global dari redux
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log(counter);
  
  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter]);


  const previous = () => {
    setCounter(counter - 1);
    // console.log(counter);
  };
  const next = () => {
    setCounter(counter + 1);
    // console.log(counter);
  };

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
            <Button variant="primary" size="md" onClick={previous}>
              Previous
            </Button>
          </div>
        </Col>
        <Col>
          <p className="text-center">1 / 3</p>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Button variant="primary" size="md" onClick={next}>
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
