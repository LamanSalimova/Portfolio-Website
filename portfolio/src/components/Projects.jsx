import React from "react";
import Nav from "react-bootstrap/Nav";
import { Col, Row, Container, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import proImage1 from "../assets/images/proImage1.png";
import proImage2 from "../assets/images/bankApp.png";
import proImage3 from "../assets/images/lucky.png";
import proImage4 from "../assets/images/todoApp.png";
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      demoLink: "#",
      githubLink: "https://github.com/LamanSalimova/MyBank-App",
      imgUrl: proImage1,
    },
    {
      title: "Bank Website",
      demoLink: "https://sunny-puffpuff-303eec.netlify.app",
      githubLink: "https://github.com/LamanSalimova/MyBank-App",
      // description: "Design & Development",
      imgUrl: proImage2,
    },
    {
      title: "E-Commerce Website",
      demoLink: "https://remarkable-dieffenbachia-a98169.netlify.app",
      githubLink:
        "https://github.com/LamanSalimova/E-Commerce-Multi-Page-Website",
      // description: "Design & Development",
      imgUrl: proImage3,
    },
    {
      title: "Todo Application",
      demoLink: "https://eclectic-concha-38fabf.netlify.app",
      githubLink: "https://github.com/LamanSalimova/React-Todo-App-",
      // description: "Design & Development",
      imgUrl: proImage4,
    },
    // {
    //   title:"Bank Website",
    //   description:"Design & Development",
    //   imgUrl : proImage5
    // },
    // {
    //   title:"Bank Website",
    //   description:"Design & Development",
    //   imgUrl : proImage6
    // },
    // {
    //   title:"Bank Website",
    //   description:"Design & Development",
    //   imgUrl : proImage7
    // },
    // {
    //   title:"Bank Website",
    //   description:"Design & Development",
    //   imgUrl : proImage8
    // },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>These are some of the projects I've worked on most recently.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Website</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">App/Game</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })
                      .slice(0, 3)}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })
                      .slice(3)}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
