import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../src/assets/images/html.png";
import img2 from "../../src/assets/images/css.png";
import img3 from "../../src/assets/images/sass.png";
import img4 from "../../src/assets/images/chakra.png";
import img5 from "../../src/assets/images/bootstrap.png";
import img6 from "../../src/assets/images/js.png";
import img7 from "../../src/assets/images/react.png";
import img8 from "../../src/assets/images/github2.png";
import img9 from "../../src/assets/images/tsLogo.png";
import img10 from "../../src/assets/images/reduxLogo.png";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>These are the technologies I've worked with</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="img-box">
                    <img src={img1} alt="img" />
                  </div>

                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img2} alt="img" />
                  </div>

                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img3} alt="img" />
                  </div>

                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <div className="img-box chakra">
                    <img src={img4} alt="img" />
                  </div>

                  <h5>Chakra UI</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img5} alt="img" />
                  </div>

                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img6} alt="img" />
                  </div>

                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img7} alt="img" />
                  </div>

                  <h5>React Js</h5>
                </div>

                <div className="item">
                  <div className="img-box">
                    <img src={img9} alt="img" />
                  </div>

                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img10} alt="img" />
                  </div>

                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={img8} alt="img" />
                  </div>

                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
