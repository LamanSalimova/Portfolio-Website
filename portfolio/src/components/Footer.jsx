import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p className="footerLogo">LS</p>
          </Col> */}
          <Col
            size={12}
            className="text-center text-sm-end d-flex flex-column align-items-center mt-5"
          >
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/lamansalimova/"
                target="blank"
              >
                <GrLinkedinOption />
              </a>
              <a
                href="https://www.instagram.com/laman.saliimova/"
                target="blank"
              >
                <AiOutlineInstagram />
              </a>
              <a href="https://github.com/LamanSalimova" target="blank">
                <AiFillGithub />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
