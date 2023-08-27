import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { Container, Row, Col, Card,  Table } from "react-bootstrap";

function AdminLyricsSubmission() {
  const [submissions, ] = useState([
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



  

  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-4">
          <Row className="dark-version">
            <Col className="dark-version" xs={12}>
              <Card className="dark-version text-white">
                <div className="d-sm-flex justify-content-between">
                  <div className="card-header">
                    <h5 className="mb-0">Lyrics Submission</h5>
                  </div>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <a
                        href="./lyrics"
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
                    <thead className="thead-light bg-gray-200 dark-version">
                      <tr className="bg-gray-200 dark-version">
                        <th className="bg-gray-200 dark-version">#</th>
                        <th className="bg-gray-200 dark-version">Song Name</th>
                        <th className="bg-gray-200 dark-version">ISRC</th>
                        <th className="bg-gray-200 dark-version">
                          Writer Name
                        </th>
                        <th className="bg-gray-200 dark-version">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200 dark-version">
                      {submissions.map((submission) => (
                        <tr
                          className="bg-gray-200 dark-version"
                          key={submission.id}
                        >
                          <td className="bg-gray-200 dark-version">
                            {submission.id}
                          </td>
                          <td className="bg-gray-200 dark-version">
                            {submission.songName}
                          </td>
                          <td className="bg-gray-200 dark-version">
                            {submission.isrc}
                          </td>
                          <td className="bg-gray-200 dark-version">
                            {submission.writerName}
                          </td>
                          <td className="bg-gray-200 dark-version">
                            {submission.status}
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
