import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

const AdminLyrics = () => {
  return (
    <div className="bg-gray-200 dark-version" style={{ minHeight: "165vh" }}>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-4">
          <Row className="mt-4">
            <Col lg={10} xs={10} className="mx-auto position-relative">
              <Card>
                <Card.Header className="p-3 pt-4">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n1 me-4 float-start">
                    <i className="material-icons opacity-10">lyrics</i>
                  </div>
                  <h3 className="mb-0 text-align center">
                    <b>Lyrics</b>
                  </h3>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="projectName">
                      <Form.Label>Order Number/Label Name</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                    <Form.Group controlId="emailAddress">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                    <Form.Group controlId="isrcCode">
                      <Form.Label>ISRC Code (if applicable)</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                    <Form.Group controlId="writerName">
                      <Form.Label>Writer Name</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                    <Form.Group controlId="languageOfLyrics">
                      <Form.Label>Language Of Lyrics</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control p-1 text-light bg-gradient-dark"
                      />
                    </Form.Group>
                  </Form>

                  {/* Project Tags */}
                  <Form.Group controlId="projectTags">
                    <Form.Label className="mt-5 form-label h5 ms-3">
                      Project Tags
                    </Form.Label>
                    <Form.Control
                      className="form-control p-1 text-light bg-gradient-dark"
                      as="select"
                      multiple
                    >
                      <option value="Choice 1" selected>
                        Choice 1
                      </option>
                      <option value="Choice 2">Choice 2</option>
                      <option value="Choice 3">Choice 3</option>
                      <option value="Choice 4">Choice 4</option>
                    </Form.Control>
                  </Form.Group>

                  {/* Upload file */}
                  <div className="input-group input-group-dynamic mt-4 ms-3">
                    <label className="form-label  h5 mt-3">
                      <u>
                        <b>Upload file</b>
                      </u>
                    </label>
                    <Form
                      id="dropzone"
                      className="form-control dropzone mt-7"
                      action="/file-upload"
                    >
                      <div className="fallback">
                        <input name="file" type="file" multiple />
                      </div>
                    </Form>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="light" className="m-0">
                      Cancel
                    </Button>
                    <Button variant="bg-gradient-dark" className="m-0 ms-2">
                      Submit
                    </Button>
                  </div>
                </Card.Body>
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
                  <i className="fa fa-heart"></i> by
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
                      swalay
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </main>
    </div>
  );
};

export default AdminLyrics;
