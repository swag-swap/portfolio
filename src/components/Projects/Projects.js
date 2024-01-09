import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import colorpicker from "../../Assets/Projects/colorpicker.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import githubdata from "../../Assets/Projects/githubdata.png";
import lobby from "../../Assets/Projects/multiplayer_lobby.png";
import sggs from "../../Assets/Projects/sggs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lobby}
              isBlog={false}
              title="Multiplayer lobby"
              description="Designed and developed a multiplayer gaming application using React Three Fiber and Socket.io, providing animmersive and engaging user experience for a diverse player base"
              ghLink="https://github.com/swag-swap/mansion_rooms"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sggs}
              isBlog={false}
              title="Sggs-3d-site"
              description="SGGS College 3D Site is a virtual representation of SGGS College, showcasing various campus locations and facilities in an interactive 3D environment. The project aims to provide a visually appealing and immersive experience for prospective students, parents, and visitors to explore the college virtually."
              ghLink="https://github.com/swag-swap/sggs_3d_website"
              demoLink="https://sggs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/swag-swap/dashboard"
              demoLink="https://dashboard-learn.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Sggs news and blog"
              description="Experience a comprehensive news and blog application offering a myriad of articles, stories, and updates covering diverse topics. Stay informed, engaged, and entertained with fresh, reliable content, enriched by interactive features, delivering an immersive reading and sharing experience for every user. "
              ghLink="https://github.com/swag-swap/sggs_news-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubdata}
              isBlog={false}
              title="Github Data"
              description="The frontend of GitHub data is a user-centric interface displaying repositories, commits, issues, and pull requests. It offers a visually appealing presentation, intuitive navigation, and interactive elements, enabling users to explore, manage, and collaborate on code repositories seamlessly within a web-based environment."
              ghLink="https://github.com/swag-swap/Learning-javascript/tree/main/projects/07_github_data_of_user"
              demoLink="https://swag-swap.github.io/Learning-javascript/projects/07_github_data_of_user/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorpicker}
              isBlog={false}
              title="Color Picker"
              description="A color picker is a graphical tool allowing users to select, preview, and choose specific colors. It typically provides a spectrum, hue sliders, or input fields, enabling precise color selection. Users can generate color codes (RGB, HEX) for design projects, ensuring accurate color representation across digital mediums."
              ghLink="https://github.com/swag-swap/Learning-javascript/tree/main/projects/01_color_picker"
              demoLink="https://swag-swap.github.io/Learning-javascript/projects/01_color_picker/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
