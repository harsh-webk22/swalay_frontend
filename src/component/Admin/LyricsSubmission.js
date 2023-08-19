import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

function AdminLyricsSubmission() {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    {
      id: 2,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    {
      id: 3,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    {
      id: 4,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    {
      id: 5,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    {
      id: 6,
      songName: "JJSKY Music",
      isrc: "int1001",
      writerName: "nikhil",
      status: "pending",
    },
    // Add more submissions here...
  ]);

  const handleApprove = (id) => {
    // Update the status of the submission with the given ID to "Approved"
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) =>
        submission.id === id
          ? { ...submission, status: "Approved" }
          : submission
      )
    );
  };

  const handleReject = (id) => {
    // Update the status of the submission with the given ID to "Rejected"
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) =>
        submission.id === id
          ? { ...submission, status: "Rejected" }
          : submission
      )
    );
  };

  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-4">
          <Row>
            <Col xs={12}>
              <Card className="bg-gray-900 text-white">
                <div className="d-sm-flex justify-content-between">
                  <div className="card-header">
                    <h5 className="mb-0">Lyrics Submission</h5>
                  </div>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <a
                        href="./Lyrics.html"
                        className="mb-0 btn btn-icon bg-gradient-primary"
                      >
                        Add Lyrics
                      </a>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <Table
                    className="table table-dark table-flush"
                    id="datatable-search"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>#</th>
                        <th>Song Name</th>
                        <th>ISRC</th>
                        <th>Writer Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((submission) => (
                        <tr key={submission.id}>
                          <td className="text-sm font-weight-normal">
                            {submission.id}
                          </td>
                          <td className="text-sm font-weight-normal">
                            {submission.songName}
                          </td>
                          <td className="text-sm font-weight-normal">
                            {submission.isrc}
                          </td>
                          <td className="text-sm font-weight-normal">
                            {submission.writerName}
                          </td>
                          <td className="text-sm font-weight-normal">
                            {submission.status}
                          </td>
                          <td>
                            <Button
                              variant="success"
                              onClick={() => handleApprove(submission.id)}
                              disabled={submission.status === "Approved"}
                            >
                              Approve
                            </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={() => handleReject(submission.id)}
                              disabled={submission.status === "Rejected"}
                            >
                              Reject
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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
                    {/* Other navigation links */}
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

export default AdminLyricsSubmission;
