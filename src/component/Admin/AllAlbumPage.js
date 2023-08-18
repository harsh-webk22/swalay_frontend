import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
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

  const handleApproveReject = (albumId, action) => {
    // Find the album by ID and update its status based on the action
    const updatedAlbums = albums.map((album) =>
      album.id === albumId
        ? { ...album, status: action === "approve" ? "approved" : "rejected" }
        : album
    );

    setAlbums(updatedAlbums);
  };

  return (
    <div
      className="g-sidenav-show bg-gray-200 dark-version text-white"
      style={{ minHeight: "98vh" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Container fluid>
          <Row className="mt-3">
            <Col>
              <Card className="bg-gradient-dark text-white">
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
                        href="./add_New_Album.html"
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
                      <thead className="thead-light">
                        <tr>
                          <th>Album Name</th>
                          <th>Total Tracks</th>
                          <th>Artist Name</th>
                          <th>Label</th>
                          <th>Release Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {albums.map((album) => (
                          <tr key={album.id}>
                            <td className="text-sm font-weight-normal">
                              <Link to={`/album/${album.id}`}>
                                {album.name}
                              </Link>
                            </td>
                            <td className="text-sm font-weight-normal">
                              {album.totalTracks}
                            </td>
                            <td className="text-sm font-weight-normal">
                              {album.artist}
                            </td>
                            <td className="text-sm font-weight-normal">
                              {album.label}
                            </td>
                            <td className="text-sm font-weight-normal">
                              {album.releaseDate}
                            </td>
                            <td className="text-sm font-weight-normal">
                              {album.status}
                            </td>
                            <td>
                              {album.status === "pending" && (
                                <div>
                                  <Button
                                    variant="success"
                                    className="mr-2"
                                    onClick={() =>
                                      handleApproveReject(album.id, "approve")
                                    }
                                    disabled={album.status !== "pending"}
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    variant="danger"
                                    onClick={() =>
                                      handleApproveReject(album.id, "reject")
                                    }
                                    disabled={album.status !== "pending"}
                                  >
                                    Reject
                                  </Button>
                                </div>
                              )}
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
