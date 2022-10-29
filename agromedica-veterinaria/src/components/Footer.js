import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/header-img.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} className="blackbg" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. TCU - UCR</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
