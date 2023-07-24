import logo from "./assets/img/team-3.jpg";
import "./App.css";

// import Header from "./component/Header";

function Temp() {
  return (
    <div classNameName="App">
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            className="navbar-brand m-0"
            href=" https://demos.creative-tim.com/material-dashboard-pro/pages/dashboards/analytics.html "
            target="_blank"
          >
            <img
              src="../../assets/img/SwaLay.webp"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold text-white"></span>
          </a>
        </div>

        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto h-auto"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item mb-2 mt-0">
              <a
                data-bs-toggle="collapse"
                href="#ProfileNav"
                className="nav-link text-white"
                aria-controls="ProfileNav"
                role="button"
                aria-expanded="true"
              >
                <img src={logo} alt="" className="avatar" />
                <span className="nav-link-text ms-2 ps-1">Raghav</span>
              </a>
              <div className="collapse" id="ProfileNav">
                <ul className="nav ">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="../../pages/profile/myprofile.html"
                    >
                      <span className="sidenav-mini-icon"> </span>
                      <span className="sidenav-normal  ms-3  ps-1">
                        {" "}
                        My Profile{" "}
                      </span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white "
                      href="../../pages/authentication/signin/basic.html"
                    >
                      <span className="sidenav-mini-icon"> </span>
                      <span className="sidenav-normal  ms-3  ps-1">
                        {" "}
                        Logout{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <hr className="horizontal light mt-0" />
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#dashboardsExamples"
                className="nav-link text-white active"
                aria-controls="dashboardsExamples"
                role="button"
                aria-expanded="false"
              >
                <i className="material-icons-round opacity-10">dashboard</i>
                <span className="nav-link-text ms-2 ps-1">Dashboards</span>
              </a>
              <div className="collapse  show " id="dashboardsExamples">
                <ul className="nav ">
                  <li className="nav-item active">
                    <a
                      className="nav-link text-white active"
                      href="../../pages/dashboards/home.html"
                    >
                      <span className="sidenav-normal  ms-2  ps-1"> Home </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-white "
                      href="../../pages/dashboards/all_albums.html"
                    >
                      <span className="sidenav-normal  ms-2  ps-1">
                        {" "}
                        Music Release{" "}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-white "
                      href="../../pages/dashboards/Lyrics.html"
                    >
                      <span className="sidenav-normal  ms-2  ps-1">
                        {" "}
                        Reports{" "}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-white "
                      href="../../pages/dashboards/Lyrics.html  "
                    >
                      <span className="sidenav-normal  ms-2  ps-1">
                        {" "}
                        Lyrics{" "}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link text-white "
                      href="../../pages/dashboards/copyright.html"
                    >
                      <span className="sidenav-normal  ms-2  ps-1">
                        {" "}
                        copyright claims{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
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

                {/* <!-- <label className="mt-5 ms-3 h4"><u>Project Description</u></label>
            <p className="form-text text-muted ms-3 h6">
              This is how others will learn about the project, so make it good!
            </p>
            <div id="editor" className="editor">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p><br></p>
            </div> --> */}

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
          {/* </div>
    </div> */}
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
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}

export default Temp;
