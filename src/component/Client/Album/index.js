import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const AdminAllAlbumsPage = () => {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      name: "Maan Meri Jaan 1",
      totalTracks: 50,
      artist: "Admin",
      label: "61",
      releaseDate: "2011/04/25",
      status: "pending",
    },
    {
      id: 2,
      name: "Maan Meri Jaan 2",
      totalTracks: 50,
      artist: "Admin",
      label: "61",
      releaseDate: "2011/04/25",
      status: "pending",
    },
    {
      id: 3,
      name: "Maan Meri Jaan 3",
      totalTracks: 50,
      artist: "Admin",
      label: "61",
      releaseDate: "2011/04/25",
      status: "pending",
    },
    {
      id: 4,
      name: "Maan Meri Jaan 4",
      totalTracks: 50,
      artist: "Admin",
      label: "61",
      releaseDate: "2011/04/25",
      status: "pending",
    },
    {
      id: 5,
      name: "Maan Meri Jaan 5",
      totalTracks: 50,
      artist: "Admin",
      label: "61",
      releaseDate: "2011/04/25",
      status: "pending",
    },
  ]);

  return (
    <div
      className="g-sidenav-show bg-gray-200 dark-version"
      style={{ minHeight: "98vh" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid>
          <Row className=" dark-version mt-3">
            <Col>
              <Card className="bg-gray-200 dark-version text-white">
                <div className="d-sm-flex justify-content-between">
                  <Card.Header className="bg-transparent border-bottom border-white">
                    <h5 className="mb-0">All Albums</h5>
                    <p className="text-sm mb-0 text-muted">
                      Browse and manage your music albums.
                    </p>
                  </Card.Header>
                  <div className="d-flex card-header">
                    <div className="dropdown d-inline">
                      <Button
                        href="./add_album"
                        className="mb-0 btn btn-icon bg-gradient-primary"
                      >
                        Add New Album
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <div className="table-responsive">
                    <Table
                      className="table table-dark table-flush"
                      id="datatable-search"
                    >
                      <thead className="thead-light bg-gray-200 dark-version">
                        <tr className="bg-gray-200 dark-version">
                          <th className="bg-gray-200 dark-version">
                            Album Name
                          </th>
                          <th className="bg-gray-200 dark-version">
                            Total Tracks
                          </th>
                          <th className="bg-gray-200 dark-version">
                            Artist Name
                          </th>
                          <th className="bg-gray-200 dark-version">Label</th>
                          <th className="bg-gray-200 dark-version">
                            Release Date
                          </th>
                          <th className="bg-gray-200 dark-version">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200 dark-version">
                        {albums.map((album) => (
                          <tr
                            className="bg-gray-200 dark-version"
                            key={album.id}
                          >
                            <td className="bg-gray-200 dark-version">
                              <Link to={`/album/${album.id}`}>
                                {album.name}
                              </Link>
                            </td>
                            <td className="bg-gray-200 dark-version">
                              {album.totalTracks}
                            </td>
                            <td className="bg-gray-200 dark-version">
                              {album.artist}
                            </td>
                            <td className="bg-gray-200 dark-version">
                              {album.label}
                            </td>
                            <td className="bg-gray-200 dark-version">
                              {album.releaseDate}
                            </td>
                            <td className="bg-gray-200 dark-version">
                              {album.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
                <Card.Footer className="py-4">
                  <Container>
                    <Row className="align-items-center justify-content-between">
                      <Col
                        lg={6}
                        className="text-center text-sm text-muted text-lg-start"
                      >
                        ©{new Date().getFullYear()}, made with{" "}
                        <i className="fa fa-heart text-danger"></i> by Swalay
                      </Col>
                      <Col lg={6}>
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                          <li className="nav-item">
                            <a href="#">Dashboard</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">About Us</a>
                          </li>
                          {/* Additional footer links go here */}
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AdminAllAlbumsPage;
