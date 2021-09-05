import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://test-mern-api.herokuapp.com/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  // ini langsung menampilkan api padahal butuh calling dulu jadi ada kondisi hela
  if (data.author) {
    return (
      <div>
        <Image
          src={`https://test-mern-api.herokuapp.com/${data.image}`}
          className="img-blog"
        />
        <Container className="p-5">
          <h3>{data.title}</h3>
          <p className="text-muted">
            {data.author.name} - {data.createdAt}
          </p>
          <p>{data.content}</p>
        </Container>
      </div>
    );
  }
  return <p>Loading......</p>;
};

export default withRouter(DetailBlog);
