import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

export default function Main(props) {
  // console.log(props.children)
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
}
