import { useState } from "react";
import { apiendpoint } from "../helper/apiendpoint";
import { langArr, genreArray } from "../helper/utilArray";
import Dropdown from "../Dropdown";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

const AddAlbum = () => {
  let albumDemoData = {
    title: "",
    artist: "",
    genre: "",
    label: "",
    cloud_link: "",
    release_date: "",
    language: "",
    producer: "",
    duration: "",
  };

  const [albumData, setAlbumData] = useState(albumDemoData);

  // To store the artwork image link
  const [artwork, setArtwork] = useState("");

  // Upload image to S3 bucket
  const handleImageUplaod = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const token = localStorage.getItem("token");
    try {
      let res = await fetch(`${apiendpoint}/client/artwork`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (!res.ok) {
        alert("Authentication failed!");
        return;
      }

      res = await res.json();
      // Save the s3 bucket url of the artwork
      setArtwork(res.url);
      alert("Artwork successfully uploaded");
    } catch (err) {
      alert("Error in uploading artwork!");
      return;
    }
  };

  // Function to post data
  const handleSubmit = async () => {
    // Extract JWT token from localstorage
    const token = localStorage.getItem("token");

    try {
      let res = await fetch(`${apiendpoint}/client/createalbum`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...albumData, artwork }),
      });

      if (!res.ok) {
        alert("Authentication failed!");
        return;
      }

      alert("Album successfully uploaded");
    } catch (err) {
      alert("Error in updating album failed!");
      return;
    }
  };

  // Function to change language
  const handleLang = (e) => {
    const temp = {
      ...albumData,
      language: e.target.value,
    };
    setAlbumData(temp);
  };

  // Function to change genre
  const handleGenre = (e) => {
    const temp = {
      ...albumData,
      genre: e.target.value,
    };
    setAlbumData(temp);
  };

  return (
    <div
      className="g-sidenav-show  bg-gray-200 dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row mt-4">
            <div className="col-lg-10 col-10 mx-auto position-relative">
              <div className="card">
                <div className="card-header p-3 pt-4">
                  <h3 className="mb-0 text-align center">
                    <b>Album Details</b>
                  </h3>
                </div>
                <div className="card-body pt-2">
                  <label for="projectName" className="form-label ">
                    Album Title
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.title}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          title: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <label for="projectName" className="form-label">
                    Main Artist
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.artist}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          artist: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>

                {/* Dropdown to handle language */}
                <Dropdown
                  label={"Genre"}
                  onChange={handleGenre}
                  value={albumData.genre}
                  optionArray={genreArray}
                />

                <div className="card-body pt-2">
                  <label for="projectName" className="form-label">
                    Record label
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.label}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          label: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <label for="projectName" className="form-label">
                    Upload from cloud (optional) - Google Drive link
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.cloud_link}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          cloud_link: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <label className=" form-label " for="inputGroupFile02">
                    Art Work (File Type : png, jpg | File Size : 3000 x 3000){" "}
                  </label>
                  <div className="mb-3">
                    <input
                      type="file"
                      className="p-1 form-select dark-version"
                      id="inputGroupFile02"
                      onChange={handleImageUplaod}
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <label for="projectName" className="form-label ">
                    Release Date
                  </label>
                  <div className=" input-group-dynamic ">
                    <input
                      type="date"
                      className="p-1 text-light  form-select dark-version"
                      value={albumData.release_date}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          release_date: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>

                {/* Dropdown to handle language */}
                <Dropdown
                  label={"Language"}
                  onChange={handleLang}
                  value={albumData.language}
                  optionArray={langArr}
                />

                <div className="card-body pt-2">
                  <label for="projectName" className="form-label">
                    Producer
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.producer}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          producer: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <label for="projectName" className="form-label">
                    Duration
                  </label>
                  <div className="input-group input-group-outline dark-version">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={albumData.duration}
                      onChange={(e) => {
                        const temp = {
                          ...albumData,
                          duration: e.target.value,
                        };
                        setAlbumData(temp);
                      }}
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <label for="language" className="form-label">
                    P Line
                  </label>
                  <div className="mb-3">
                    <select
                      name="language"
                      id="language"
                      className="p-1 form-select text-light dark-version"
                      required
                    >
                      <option value="">℗ 2023 Anant Raghav</option>
                    </select>
                  </div>
                </div>

                <div className="card-body pt-2">
                  <label for="name" className="form-label">
                    C Line
                  </label>
                  <div className="mb-3">
                    <select
                      name="cline"
                      className="p-1 form-select text-light dark-version"
                    >
                      <option value="2023 Anant Raghav">
                        © 2023 Anant Raghav
                      </option>
                    </select>
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-3 p-3">
                  <button
                    type="button"
                    name="button"
                    className="btn bg-gradient-dark p-3 "
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AddAlbum;
