import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

const AdminAllLabels = () => {
  return (
    <div
      className="g-sidenav-show bg-gray-200 dark-version"
      style={{ minHeight: "100vh" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Container fluid className="py-4">
          <Row className="dark-version">
            <Col className="dark-version">
              <Card className="dark-version text-white">
                <div className="d-sm-flex justify-content-between">
                  <Card.Header className="bg-transparent border-bottom border-white">
                    <h5 className="mb-0">All Labels</h5>
                  </Card.Header>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <Button
                        href="../label_Activation.html"
                        className="mb-0 btn btn-icon bg-gradient-primary"
                      >
                        New Label Registration
                      </Button>
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
                        <th className="bg-gray-200 dark-version">Label Name</th>
                        <th className="bg-gray-200 dark-version">Artist Name</th>
                        <th className="bg-gray-200 dark-version">Email</th>
                        <th className="bg-gray-200 dark-version">Joined date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200 dark-version">
                      <tr className="bg-gray-200 dark-version">
                        <td className="bg-gray-200 dark-version">1</td>
                        <td className="bg-gray-200 dark-version">
                          JJSKY Music
                        </td>
                        <td className="bg-gray-200 dark-version">
                          Sachin Kumar
                        </td>
                        <td className="bg-gray-200 dark-version">
                          jjskymusic@gmail.com
                        </td>
                        <td className="bg-gray-200 dark-version">
                          08/05/2023 13:48 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-gray-200 dark-version">2</td>
                        <td className="bg-gray-200 dark-version">
                          Krishna x Prajapati Pvt. Ltd.
                        </td>
                        <td className="bg-gray-200 dark-version">Krishna</td>
                        <td className="bg-gray-200 dark-version">
                          kamalprajapati2025@gmail.com
                        </td>
                        <td className="bg-gray-200 dark-version">
                          08/05/2023 13:48 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-gray-200 dark-version">3</td>
                        <td className="bg-gray-200 dark-version">BeetaBie</td>
                        <td className="bg-gray-200 dark-version">
                          Subhankar Sarkar
                        </td>
                        <td className="bg-gray-200 dark-version">
                          25subhankar@gmail.com
                        </td>
                        <td className="bg-gray-200 dark-version">
                          08/05/2023 13:48 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-gray-200 dark-version">4</td>
                        <td className="bg-gray-200 dark-version">
                          Baba Music Tune
                        </td>
                        <td className="bg-gray-200 dark-version">
                          Aman Kumar
                        </td>
                        <td className="bg-gray-200 dark-version">
                          amanbabagok@gmail.com
                        </td>
                        <td className="bg-gray-200 dark-version">
                          08/05/2023 13:48 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-gray-200 dark-version">5</td>
                        <td className="bg-gray-200 dark-version">
                          The AAR music production
                        </td>
                        <td className="bg-gray-200 dark-version">
                          Ajay Chauhan
                        </td>
                        <td className="bg-gray-200 dark-version">
                          theaarmusicproduction9@gmail.com
                        </td>
                        <td className="bg-gray-200 dark-version">
                          08/05/2023 13:48 PM
                        </td>
                      </tr>
                      {/* Additional table rows go here */}
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
        </Container>
      </main>
    </div>
  );
};

export default AdminAllLabels;
