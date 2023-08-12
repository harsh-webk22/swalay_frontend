import Sidebar from "../Sidebar";

const Lyrics = () => {
  return (
    <div
      className="g-sidenav-show  bg-gray-200 dark-version "
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* <!-- Navbar -->
    <!-- End Navbar --> */}

        <div className="container-fluid py-4">
          <div className="row mt-4">
            <div className="col-lg-10 col-10 mx-auto position-relative">
              <div className="card">
                <div className="card-header p-3 pt-4">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n1 me-4 float-start">
                    <i className="material-icons opacity-10">lyrics</i>
                  </div>
                  <h3 className="mb-0 text-align center">
                    <b>Lyrics</b>
                  </h3>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      Order Number/Label Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      ISRC Code (if aplicable)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      Writer Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="input-group input-group-dynamic">
                    <label for="projectName" className="form-label">
                      Language Of Lyrics
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                    />
                  </div>
                </div>

                

                <label className="mt-5 form-label h5 ms-3">Project Tags</label>
                <select
                  className="form-control "
                  name="choices-multiple-remove-button"
                  id="choices-multiple-remove-button"
                  multiple
                >
                  <option value="Choice 1" selected>
                    Choice 1
                  </option>
                  <option value="Choice 2">Choice 2</option>
                  <option value="Choice 3">Choice 3</option>
                  <option value="Choice 4">Choice 4</option>
                </select>

                <div className="input-group input-group-dynamic mt-4 ms-3 ">
                  <label className="form-label  h5 mt-3">
                    <u>
                      <b>Upload file</b>
                    </u>
                  </label>
                  <form
                    action="/file-upload"
                    className="form-control dropzone mt-7"
                    id="dropzone"
                  >
                    <div className="fallback">
                      <input name="file" type="file" multiple />
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="button"
                    name="button"
                    className="btn btn-light m-0"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    name="button"
                    className="btn bg-gradient-dark m-0 ms-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer py-4 ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="copyright text-center text-sm text-muted text-lg-start ">
                  ©
                  {/* <script>
                document.write(new Date().getFullYear())
              </script>, */}
                  made with <i className="fa fa-heart"></i> by
                  <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold"
                    target="_blank"
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
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/"
                      className="nav-link text-muted"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/swalay-merch"
                      className="nav-link text-muted"
                      target="_blank"
                    >
                      Merch
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.swalay.talantoncore.in/pricing"
                      className="nav-link pe-0 text-muted"
                      target="_blank"
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

export default Lyrics;
