import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

const AdminAll_Payment = () => {
  return (
<div
      className="g-sidenav-show  bg-gray-200 dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card dark-version">
                <div className="d-sm-flex justify-content-between">
                  <div className="card-header">
                    <h5 className="mb-0">Payments</h5>
                  </div>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <a
                        href="../label_Activation.html"
                        className="mb-0 btn btn-icon bg-gradient-primary"
                      >
                        New Earn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table
                    className="table  bg-dark text-white"
                    id="datatable-search"
                  >
                    <thead className="thead-dark ">
                      <tr>
                        <th className="text-sm font-weight-normal dark-version">#</th>
                        <th className="text-sm font-weight-normal dark-version" >Label Name</th>
                        <th className="text-sm font-weight-normal dark-version">Total Earning</th>
                        <th className="text-sm font-weight-normal dark-version">Payment History</th>
                        <th className="text-sm font-weight-normal dark-version">Pay Out Request</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-sm font-weight-normal dark-version">1</td>
                        <td className="text-sm font-weight-normal dark-version">
                          JJSKY Music
                        </td>
                        <td className="text-sm font-weight-normal dark-version"> 1001</td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon bg-gradient-primary"
                          >
                            Show History
                          </a>
                        </td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal dark-version">2</td>
                        <td className="text-sm font-weight-normal dark-version">
                          Krishna x Prajapati Pvt. Ltd.
                        </td>
                        <td className="text-sm font-weight-normal dark-version">1682.58</td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon bg-gradient-primary dark-version"
                          >
                            Show History
                          </a>
                        </td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal dark-version">3</td>
                        <td className="text-sm font-weight-normal dark-version">BeetaBie</td>
                        <td className="text-sm font-weight-normal dark-version">1930.54</td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon bg-gradient-primary dark-version"
                          >
                            Show History
                          </a>
                        </td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal dark-version">4</td>
                        <td className="text-sm font-weight-normal dark-version">
                          Baba Music Tune
                        </td>
                        <td className="text-sm font-weight-normal dark-version">3632.56</td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon bg-gradient-primary dark-version"
                          >
                            Show History
                          </a>
                        </td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon btn-secondary"
                          >
                            Paid
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-weight-normal dark-version">5</td>
                        <td className="text-sm font-weight-normal dark-version">
                          The AAR music production
                        </td>
                        <td className="text-sm font-weight-normal dark-version">5388.03</td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon bg-gradient-primary dark-version"
                          >
                            Show History
                          </a>
                        </td>
                        <td className="text-sm font-weight-normal dark-version">
                          <a
                            href="*"
                            className="mb-0 btn btn-icon btn-secondary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Paid
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer py-4  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    ©<script>document.write(new Date().getFullYear())</script>,
                    made with <i className="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Swalay
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/"
                        className="nav-link text-light"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/"
                        className="nav-link text-light"
                        target="_blank"
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/swalay-merch"
                        className="nav-link text-light"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Merch
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.swalay.talantoncore.in/pricing"
                        className="nav-link pe-0 text-light"
                        target="_blank"
                        rel="noreferrer"
                      >
                        swalay
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};
export default AdminAll_Payment;
