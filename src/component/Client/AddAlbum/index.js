import Sidebar from "../Sidebar";

const AddAlbum = () => {
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
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label ">
                      Song or Album Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label">
                      Main Artist
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="mb-3 ">
                    <label for="subcategory" className="form-label">
                      Genre
                    </label>
                    <select
                      name="genre"
                      className="p-1 form-select text-light dark-version"
                      required
                    >
                      <option className="bg-dark" value="">
                        Select Genre
                      </option>
                      <option className="bg-dark" value="Pop">
                        Pop
                      </option>
                      <option className="bg-dark" value=" Film">
                        {" "}
                        Film
                      </option>
                      <option className="bg-dark" value=" Folk">
                        {" "}
                        Folk
                      </option>
                      <option className="bg-dark" value=" Devotional">
                        {" "}
                        Devotional
                      </option>
                      <option className="bg-dark" value=" Traditional">
                        {" "}
                        Traditional
                      </option>
                      <option className="bg-dark" value=" Instrumental">
                        {" "}
                        Instrumental
                      </option>
                      <option
                        className="bg-dark"
                        value=" Western ClassNameical"
                      >
                        {" "}
                        Western ClassNameical
                      </option>
                      <option
                        className="bg-dark"
                        value=" Carnatic ClassNameical"
                      >
                        {" "}
                        Carnatic ClassNameical
                      </option>
                      <option
                        className="bg-dark"
                        value=" Hindustani ClassNameical"
                      >
                        {" "}
                        Hindustani ClassNameical
                      </option>
                      <option className="bg-dark" value=" Spiritual">
                        {" "}
                        Spiritual
                      </option>
                      <option className="bg-dark" value=" English Pop">
                        {" "}
                        English Pop
                      </option>
                      <option className="bg-dark" value=" Gazal">
                        {" "}
                        Gazal
                      </option>
                      <option className="bg-dark" value=" Regional Pop">
                        {" "}
                        Regional Pop
                      </option>
                      <option className="bg-dark" value=" Lounge">
                        {" "}
                        Lounge
                      </option>
                      <option className="bg-dark" value="Fusion">
                        {" "}
                        Fusion
                      </option>
                      <option className="bg-dark" value=" Electronic">
                        {" "}
                        Electronic
                      </option>
                      <option className="bg-dark" value=" Hip Hop">
                        {" "}
                        Hip Hop
                      </option>
                      <option className="bg-dark" value=" Rock">
                        {" "}
                        Rock
                      </option>
                    </select>
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label">
                      Record label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label">
                      Upload from cloud (optional) - Google Drive link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="mb-3">
                    <label className=" form-label " for="inputGroupFile02">
                      Art Work (File Type : png, jpg | File Size : 3000 x 3000){" "}
                    </label>
                    <input
                      type="file"
                      className="p-1 form-select dark-version"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className=" input-group-dynamic ">
                    <label for="projectName" className="form-label ">
                      Release Date
                    </label>
                    <input
                      type="date"
                      className="p-1 text-light  form-select dark-version"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="mb-3">
                    <label for="language" className="form-label">
                      Language
                    </label>
                    <select
                      name="language"
                      id="language"
                      className="p-1 form-select text-light dark-version"
                      required
                    >
                      <option className="bg-dark" value="">
                        Select Song Language
                      </option>
                      <option className="bg-dark" value="Hindi">
                        Hindi
                      </option>
                      <option className="bg-dark" value="Punjabi">
                        Punjabi
                      </option>
                      <option className="bg-dark" value="English">
                        English
                      </option>
                      <option className="bg-dark" value="Bengali">
                        Bengali
                      </option>
                      <option className="bg-dark" value="Gujarati">
                        Gujarati
                      </option>
                      <option className="bg-dark" value="Assamese">
                        Assamese
                      </option>
                      <option className="bg-dark" value="Malayalam">
                        Malayalam
                      </option>
                      <option className="bg-dark" value="Rajasthini">
                        Rajasthini
                      </option>
                      <option className="bg-dark" value="Konkani">
                        Konkani
                      </option>
                      <option className="bg-dark" value="Marathi">
                        Marathi
                      </option>
                      <option className="bg-dark" value="Gadhwali">
                        Gadhwali
                      </option>
                      <option className="bg-dark" value="Kannada">
                        Kannada
                      </option>
                      <option className="bg-dark" value="Bhojpuri">
                        Bhojpuri
                      </option>
                      <option className="bg-dark" value="Oriya">
                        Oriya
                      </option>
                      <option className="bg-dark" value="Telugu">
                        Telugu
                      </option>
                      <option className="bg-dark" value="Nagpuri">
                        Nagpuri
                      </option>
                      <option className="bg-dark" value="Haryanvi">
                        Haryanvi
                      </option>
                      <option className="bg-dark" value="Tamil">
                        Tamil
                      </option>
                      <option className="bg-dark" value="Maithli">
                        Maithli
                      </option>
                      <option className="bg-dark" value="Chhastisgarhi">
                        Chhastisgarhi
                      </option>
                      <option className="bg-dark" value="Santhali">
                        Santhali
                      </option>
                      <option className="bg-dark" value="Kasmiri">
                        Kasmiri
                      </option>
                      <option className="bg-dark" value="Nepali">
                        Nepali
                      </option>
                      <option className="bg-dark" value="Japanese">
                        Japanese
                      </option>
                      <option className="bg-dark" value="Arabic">
                        Arabic
                      </option>
                      <option className="bg-dark" value="African">
                        African
                      </option>
                      <option className="bg-dark" value="Urdu">
                        Urdu
                      </option>
                      <option className="bg-dark" value="Hadoti-Rajasthini">
                        Hadoti-Rajasthini
                      </option>
                      <option className="bg-dark" value="Dogri">
                        Dogri
                      </option>
                      <option className="bg-dark" value="Gharwali">
                        Gharwali
                      </option>
                      <option className="bg-dark" value="Sanskrit">
                        Sanskrit
                      </option>
                    </select>
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label">
                      Producer
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-outline dark-version">
                    <label for="projectName" className="form-label">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>

                <div className="card-body pt-2">
                  <div className="mb-3">
                    <label for="language" className="form-label">
                      P Line
                    </label>
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
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      C Line
                    </label>
                    <select name="cline" className="p-1 form-select text-light dark-version">
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
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}

        <footer className="footer py-4 ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="copyright text-center text-sm text-muted text-lg-start ">
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
                      className="nav-link text-muted"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/"
                      className="nav-link text-muted"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/swalay-merch"
                      className="nav-link text-muted"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Merch
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/pricing"
                      className="nav-link pe-0 text-muted"
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
        {/* </div> */}
      </main>
    </div>
  );
};

export default AddAlbum;
