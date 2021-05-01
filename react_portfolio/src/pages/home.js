import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <div className="col-main">
            <h1 className="index-h1"> About Me </h1>
            <div className="row row-content">
              <img src="/images/mexico_portrait.jpg" alt="Dave Jeffers" />
              <div className="content-text">
                <p>
                  Hello, my name is Dave Jeffers; I'm currently the Engineering
                  Manager for Pratt & Whitney, a aerospace jet engine company.
                  In my time in manufacturing, I've come to see the benefits of
                  having a robust background in the power of data and IT system
                  and how they can lead to a more effecient and productive
                  process.
                </p>
                <p>
                  My goal is to be able to leverage new and emerging
                  technologies to drive efficiency and make data driven
                  decisions. Learning to code is an essential step for staying
                  on the forefront of technology and understanding what it can
                  do to help impact production.
                </p>
                <p>
                  I am always looking for opportunity to advance my education
                  become employer competitive in the realm of web development.
                </p>
                <p>
                  I have always taken the challenge to find new and inovative
                  ways to drive changes in businesses, whether it be in leading
                  people, creating a new repair process, or leveraging IT and
                  data systems to become more agile, more organized, and more
                  productive.
                </p>
                <h5>Specialties: Full Stack Development</h5>
                <Row>
                  <Col size="md-4">
                    <h6>The Browser</h6>
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>Cutting Edge Development</h6>
                    <ol>
                      <li>React.js</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>API Interaction</h6>
                    <ol>
                      <li>APIs</li>
                      <li>JSON</li>
                      <li>AJAX</li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <h6>Dev Tools</h6>
                    <ol>
                      <li>Heroku</li>
                      <li>Git</li>
                      <li>GitHub</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>Databases</h6>
                    <ol>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>CS Fundamentals</h6>
                    <ol>
                      <li>Algorithms</li>
                      <li>Data Structures</li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <h6>Server Side</h6>
                    <ol>
                      <li>Templating Engines</li>
                      <li>Sessions</li>
                      <li>Writing tests</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Creating APIs</li>
                      <li>MVC</li>
                      <li>User Authentication</li>
                      <li>ORM (Sequelize)</li>
                    </ol>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
