import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swapnil Deshmukh </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently pursuing BTech in Computer Science and Engineering
            
            from Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
