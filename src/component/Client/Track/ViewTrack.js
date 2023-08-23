import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from react-router-dom
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Sidebar from "../Sidebar";

const AdminAlbumTrackPage = () => {
  const { albumId } = useParams();

  // Dummy album details for testing
  const dummyAlbumDetails = {
    id: albumId,
    name: "Sample Album",
    totalTracks: 12,
    artist: "Sample Artist",
    label: "Sample Label",
    releaseDate: "2023/08/17",
    status: "rejected", // Change this to "approved" to test the approved status
    photoUrl: "https://via.placeholder.com/300", // Sample image URL
  };

  // Dummy release tracks details
  const releaseTracksDetails = [
    {
      trackNumber: 1,
      title: "Track 1 Title",
      singer: "Singer 1",
      musicProducer: "Producer 1",
      lyricist: "Lyricist 1",
      isrc: "ISRC001",
      composer: "Composer 1",
    },
  ];

  // Dummy reason for rejection
  const rejectionReason = "This album does not meet quality standards.";

  return (
    <div className="g-sidenav-show bg-gray-200 dark-version">
      <Sidebar />
      <div
        style={{ background: "#212529", minHeight: "100vh", color: "white" }}
      >
        <Container className="py-5">
          <Row className="mb-4">
            <Col className="text-right">
              {/* Wrap the button with Link */}
              <Link
                to={`/add-track/${albumId}`}
                style={{ textDecoration: "none" }}
              >
                <Button className="px-12" variant="primary">
                  Add Track
                </Button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col md={2}></Col>
            <Col md={5}>
              <h1 className="mb-4">Album Track Page - Album ID: {albumId}</h1>
              <img
                src={dummyAlbumDetails.photoUrl}
                alt={dummyAlbumDetails.name}
                className="mb-3 img-fluid"
              />
              <p className="mb-2">
                <strong>Status:</strong> {dummyAlbumDetails.status}
              </p>
              <p className="mb-2">
                <strong>Album Name:</strong> {dummyAlbumDetails.name}
              </p>
              <p className="mb-2">
                <strong>Total Tracks:</strong> {dummyAlbumDetails.totalTracks}
              </p>
              <p className="mb-2">
                <strong>Artist:</strong> {dummyAlbumDetails.artist}
              </p>
              <p className="mb-2">
                <strong>Label:</strong> {dummyAlbumDetails.label}
              </p>
              <p className="mb-2">
                <strong>Release Date:</strong> {dummyAlbumDetails.releaseDate}
              </p>
            </Col>
            <Col md={5}>
              <Card className="bg-gradient-dark text-white p-4">
                <h2 className="mb-4">Release Tracks Details</h2>
                {releaseTracksDetails.map((track) => (
                  <div key={track.trackNumber} className="mb-4">
                    <p className="mb-1">
                      <strong>Track Number:</strong> {track.trackNumber}
                    </p>
                    <p className="mb-1">
                      <strong>Title:</strong> {track.title}
                    </p>
                    <p className="mb-1">
                      <strong>Singer:</strong> {track.singer}
                    </p>
                    <p className="mb-1">
                      <strong>Music Producer:</strong> {track.musicProducer}
                    </p>
                    <p className="mb-1">
                      <strong>Lyricist:</strong> {track.lyricist}
                    </p>
                    <p className="mb-1">
                      <strong>ISRC:</strong> {track.isrc}
                    </p>
                    <p className="mb-1">
                      <strong>Composer:</strong> {track.composer}
                    </p>
                  </div>
                ))}
              </Card>
              {dummyAlbumDetails.status === "rejected" && (
                <Card className="bg-danger text-white mt-4 p-4">
                  <h3 className="mb-3">Rejection Reason</h3>
                  <p>{rejectionReason}</p>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdminAlbumTrackPage;
