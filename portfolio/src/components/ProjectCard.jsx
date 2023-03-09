import React from "react";
import { Col } from "react-bootstrap";
export default function ProjectCard({ title, demoLink, githubLink, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          {/* <h4>{title}</h4> */}
          <a href={demoLink} target="blank" className="demo">
            Demo
          </a>
          &
          <a href={githubLink} target="blank" className="github">
            Github
          </a>
        </div>
      </div>
    </Col>
  );
}
