import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

const Home = () => {
  const history = useHistory();
  // statelokal membuat pagination menghiung halaman diberi nilai default 1
  const [counter, setCounter] = useState(1);
  // inisialisasi state global dari redux
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter]);

  const previous = () => {
    // jika si counter kurang dari atau sama dengan 1 nilainya 1 kalo gak counter dikurang 1
    setCounter(counter <= 1 ? 1 : counter - 1);
  };
  const next = () => {
    // jika si counter = totalpage tampilkan totalpage jika tidak counter + 1
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Yakin hapus data in?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`https://test-mern-api.herokuapp.com/v1/blog/post/${id}`)
              .then((res) => {
                console.log("ress delete:", res);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log("err :", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
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
              image={`https://test-mern-api.herokuapp.com/${blog.image}`}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
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
          <p className="text-center">
            {page.currentPage} / {page.totalPage}
          </p>
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
