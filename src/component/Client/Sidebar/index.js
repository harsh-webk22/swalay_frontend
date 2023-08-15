import { Link } from "react-router-dom";
import logo from "../../../assets/img/SwaLay.webp";

const Sidebar = () => {
  return (
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
        <Link className="navbar-brand m-0" to="/">
          <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold text-white"></span>
        </Link>
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
              <img
                src="../../assets/img/team-3.jpg"
                className="avatar"
                alt=""
              />
              <span className="nav-link-text ms-2 ps-1">Raghav</span>
            </a>
            <div className="collapse" id="ProfileNav">
              <ul className="nav ">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">
                    <span className="sidenav-mini-icon"> </span>
                    <span className="sidenav-normal  ms-3  ps-1">
                      {" "}
                      My Profile{" "}
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white " to="/login">
                    <span className="sidenav-mini-icon"> </span>
                    <span className="sidenav-normal  ms-3  ps-1"> Logout </span>
                  </Link>
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
                  <Link className="nav-link text-white active" to="/">
                    <span className="sidenav-normal  ms-2  ps-1"> Home </span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white " to="/add_album">
                    <span className="sidenav-normal  ms-2  ps-1">
                      {" "}
                      Music Release{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white "
                    to="/payments"
                  >
                    <span className="sidenav-normal  ms-2  ps-1">
                      {" "}
                      Reports{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white " to="lyrics">
                    <span className="sidenav-normal  ms-2  ps-1"> Lyrics </span>
                  </Link>
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
  );
};

export default Sidebar;
