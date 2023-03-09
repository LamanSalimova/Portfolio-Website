import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/images/bannerImg.png";
import doc from "../assets/CV/CV.pdf";
import { useState, useEffect } from "react";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = ["Front-End Developer", "Back-End Developer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Laman`} <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm a Front-End Developer with experience in creating
              user-friendly websites and applications. I specialize in HTML,
              CSS, JavaScript and ReactJS.
            </p>
            <button
              onClick={() => console.log("download")}
              className="download"
            >
              <a href={doc} download>
                Download CV
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={img} alt="banner-image" className="bannerImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
