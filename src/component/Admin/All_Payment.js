import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

const AdminAll_Payment = () => {
  return (
    <div
      className="g-sidenav-show bg-gray-200 dark-version text-white"
      style={{ minHeight: "100vh" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid className="py-4">
          <Row>
            <Col>
              <Card className="bg-gradient-dark text-white">
                <div className="d-sm-flex justify-content-between">
                  <Card.Header className="bg-transparent border-bottom border-white">
                    <h5 className="mb-0">Payments</h5>
                  </Card.Header>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <Button
                        href="../label_Activation.html"
                        className="mb-0 btn btn-icon bg-gradient-primary"
                      >
                        New Earn
                      </Button>
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
                        <th>Label Name</th>
                        <th>Total Earning</th>
                        <th>Payment History</th>
                        <th>Pay Out Request</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal">1</td>
                        <td className="text-sm font-weight-normal">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal">1001</td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </Button>
                        </td>
                        <td className="text-sm font-weight-normal">
                          <Button
                            href="#"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </Button>
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

export default AdminAll_Payment;
