import React from "react";
import { Container, Image } from "react-bootstrap";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
  return (
    <div>
      <Image src={RegisterBg} className="img-blog" />
      <Container className="p-5">
        <h3>Judul Post</h3>
        <p className="text-muted">Tanggal Post</p>
        <p>Lorem</p>
      </Container>
    </div>
  );
};

export default DetailBlog;
