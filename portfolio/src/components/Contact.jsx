import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/contact.png";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={img} alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form
              action="https://formsubmit.co/17afc1019abc5aeec1bc30b9dd30af82"
              method="POST"
            >
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="text" placeholder="First Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input name="text" type="text" placeholder="Last Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input name="tel" type="tel" placeholder="Phone Number" />
                </Col>
                <Col>
                  <textarea rows="6" name="message" placeholder="Message" />
                  <button type="submit" className="submit">
                    <span className="send">Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
