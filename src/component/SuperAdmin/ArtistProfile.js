import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function AdminArtistProfileLinking() {
  const [selectedOption, setSelectedOption] = useState("");

  const showProfileInput = (value) => {
    setSelectedOption(value);
    // Implement your logic to show/hide profile input based on the selected option
  };

  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-4">
          <Row className="mt-4">
            <Col lg={10} xs={10} className="mx-auto position-relative">
              <Card>
                <div className="card-header p-3 pt-4">
                  <h3 className="mb-0 text-align center">
                    <b>Artist Profile Linking</b>
                  </h3>
                </div>
                <Form>
                  <Card.Body className="pt-2">
                    <Form.Group controlId="songName">
                      <Form.Label>Song Name</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Card.Body>

                  <Card.Body className="pt-2">
                    <Form.Group controlId="isrc">
                      <Form.Label>ISRC</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Card.Body>

                  <Card.Body className="pt-2">
                    <Form.Group controlId="labelName">
                      <Form.Label>Label Name</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Card.Body>

                  <Card.Body className="pt-2">
                    <div className="mb-3">
                      <Form.Label htmlFor="profileOption">
                        Choose an option
                      </Form.Label>
                      <Form.Select
                        id="profileOption"
                        onChange={(e) => showProfileInput(e.target.value)}
                        required
                      >
                        <option value="" disabled selected>
                          Select an option
                        </option>
                        <option value="new">
                          Create new artist profile on all platforms
                        </option>
                        <option value="existing">
                          Link to my existing artist profile on platforms
                        </option>
                      </Form.Select>
                    </div>
                  </Card.Body>

                  {/* Render additional profile input based on selected option */}
                  <div id="profileInputContainer">
                    {/* Render profile input components based on selectedOption */}
                  </div>

                  <div className="d-flex justify-content-end mt-3 p-3">
                    <Button type="button" className="btn bg-gradient-dark p-3">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>

        <footer className="footer py-4">
          <Container fluid>
            <Row className="align-items-center justify-content-lg-between">
              <Col lg={6} mb-lg-0 mb-4>
                <div className="copyright text-center text-sm text-muted text-lg-start">
                  © {new Date().getFullYear()}, made with{" "}
                  <i className="fa fa-heart"></i> by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swalay
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/"
                      className="nav-link text-muted"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dashboard
                    </a>
                  </li>
                  {/* Other navigation links */}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </main>
    </div>
  );
}

export default AdminArtistProfileLinking;
