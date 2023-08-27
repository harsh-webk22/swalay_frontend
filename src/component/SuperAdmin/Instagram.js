import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

function AdminInstagramLinkingForm() {
  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version">
      <Sidebar></Sidebar>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-3">
          <Row className="mt-1">
            <Col xs={12}>
              <Card>
                <div className="p-3">
                  <h4>Instagram Linking Request</h4>
                </div>
                <div className="m-4">
                  <Form>
                    <Card.Body className="pt-2">
                      <Form.Group controlId="email">
                        <Form.Label>Enter your Email</Form.Label>
                        <Form.Control
                          type="email"
                          className="form-control p-1 text-light bg-gradient-dark"
                          required
                        />
                      </Form.Group>
                    </Card.Body>

                    <Card.Body className="pt-2">
                      <Form.Group controlId="songName">
                        <Form.Label>Enter your Song name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control p-1 text-light bg-gradient-dark"
                          required
                        />
                      </Form.Group>
                    </Card.Body>

                    <Card.Body className="pt-2">
                      <Form.Group controlId="isrcCode">
                        <Form.Label>
                          Enter I.S.R.C code of your song (if available)
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control p-1 text-light bg-gradient-dark"
                        />
                      </Form.Group>
                    </Card.Body>

                    <Card.Body className="pt-2">
                      <Form.Group controlId="instagramProfile">
                        <Form.Label>
                          Enter URL of artist's instagram profile
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control p-1 text-light bg-gradient-dark"
                          required
                        />
                      </Form.Group>
                    </Card.Body>

                    <Card.Body className="pt-2">
                      <Form.Group controlId="facebookProfile">
                        <Form.Label>
                          Enter URL of artist's facebook profile
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control p-1 text-light bg-gradient-dark"
                          required
                        />
                      </Form.Group>
                    </Card.Body>

                    <Card.Body className="pt-2">
                      <Form.Group controlId="labelName">
                        <Form.Label>
                          Enter label name or order number associated with song
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control p-1 text-light bg-gradient-dark"
                          required
                        />
                      </Form.Group>
                    </Card.Body>

                    <div className="d-flex justify-content-end mt-3 p-3">
                      <Button
                        type="button"
                        className="btn bg-gradient-dark p-3"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>

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
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/"
                        className="nav-link text-muted"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/swalay-merch"
                        className="nav-link text-muted"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Merch
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/pricing"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Swalay
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      </main>
    </div>
  );
}

export default AdminInstagramLinkingForm;
