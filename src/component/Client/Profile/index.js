import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import { apiendpoint } from "../../helper/apiendpoint";
import Sidebar from "../Sidebar";

const Profile = () => {
  const navigate = useNavigate();

  // Demo user data
  const demoData = {
    name: "Name",
    username: "Username",
    label: "64dafc6ad63be1d8d51166be",
    email: "testClient@gmail.com",
    createdAt: "2023-08-15T05:11:50.533Z",
    updatedAt: "2023-08-15T05:11:50.533Z",
    __v: 0,
  };

  // User state for storing user details
  const [userData, setUserData] = useState(demoData);

  // Function to get all clients data
  const fetchUser = async () => {
    // Fetch token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    let res = await fetch(`${apiendpoint}/client/client_data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      alert("Authentication failed!");
      return;
    }

    res = await res.json();
    setUserData(res.userInfo);
  };

  useEffect(() => {
    try {
      fetchUser();
    } catch (err) {
      alert("Error occured in fetching your data");
    }
  }, []);

  return (
    <div
      className="g-sidenav-show bg-gray-200 dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />

      <main className="main-content max-height-vh-100 h-100 ">
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl ">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-3 text-dark" href="*">
                    <svg
                      width="12px"
                      height="12px"
                      className="mb-1"
                      viewBox="0 0 45 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>shop </title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-1716.000000, -439.000000)"
                          fill="#252f40"
                          fill-rule="nonzero"
                        >
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(0.000000, 148.000000)">
                              <path d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>
                              <path d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ol>
              <h3 className="font-weight-bolder">Settings</h3>
            </nav>
          </div>
        </nav>

        <div className="container-fluid my-3 py-3">
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="card position-sticky top-1">
                <ul className="nav flex-column bg-white border-radius-lg p-3">
                  <li className="nav-item">
                    <a
                      className="nav-link text-light d-flex"
                      data-scroll=""
                      href="#profile"
                    >
                      <i className="material-icons text-lg me-2">person</i>
                      <span className="text-sm">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item pt-2">
                    <a
                      className="nav-link text-light d-flex"
                      data-scroll=""
                      href="#basic-info"
                    >
                      <i className="material-icons text-lg me-2">
                        receipt_long
                      </i>
                      <span className="text-sm">Basic Info</span>
                    </a>
                  </li>
                  <li className="nav-item pt-2">
                    <a
                      className="nav-link text-light d-flex"
                      data-scroll=""
                      href="#password"
                    >
                      <i className="material-icons text-lg me-2">lock</i>
                      <span className="text-sm">Change Password</span>
                    </a>
                  </li>
                  <li className="nav-item pt-2">
                    <a
                      className="nav-link text-light d-flex"
                      data-scroll=""
                      href="#password"
                    >
                      <i className="material-icons text-lg me-2">lock</i>
                      <span className="text-sm">Bank Details</span>
                    </a>
                  </li>
                  <li className="nav-item pt-2">
                    <a
                      className="nav-link text-light d-flex"
                      data-scroll=""
                      href="#delete"
                    >
                      <i className="material-icons text-lg me-2">delete</i>
                      <span className="text-sm">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mt-lg-0 mt-4">
              <div className="card card-body" id="profile">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-auto col-4">
                    <div className="avatar avatar-xl position-relative">
                      <img
                        src="../../../assets/img/bruce-mars.jpg"
                        alt="bruce"
                        className="w-100 rounded-circle shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="col-sm-auto col-8 my-auto">
                    <div className="h-100">
                      <h5 className="mb-1 font-weight-bolder">Admin</h5>
                      <p className="mb-0 font-weight-normal text-sm">
                        web Devloper
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex"></div>
                </div>
              </div>
              {/* <!-- Card Basic Info --> */}
              <div className="card mt-4" id="basic-info">
                <div className="card-header">
                  <h5>Basic Info</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-6">
                      <label className="form-label">First Name </label>
                      <div className="input-group input-group-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Admin"
                          value={userData?.name}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label">Last Name </label>
                      <div className="input-group input-group-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Admin"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-6">
                      <label className="form-label mt-4 ms-0">I'm</label>
                      <select
                        className="form-control dark-version"
                        name="choices-gender"
                        id="choices-gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">prefer not to say</option>
                      </select>
                    </div>
                    <div className="col-sm-8">
                      <div className="row ">
                        <div className="col-sm-5 col-5">
                          <label className="form-label mt-4 ms-0">
                            Birth Date
                          </label>
                          <select
                            className="form-control dark-version"
                            name="choices-month"
                            id="choices-month"
                          ></select>
                        </div>
                        <div className="col-sm-4 col-3">
                          <label className="form-label mt-4 ms-0">&nbsp;</label>
                          <select
                            className="form-control dark-version"
                            name="choices-day"
                            id="choices-day"
                          ></select>
                        </div>
                        <div className="col-sm-3 col-4 ">
                          <label className="form-label mt-4">&nbsp;</label>
                          <select
                            className="form-control dark-version"
                            name="choices-year"
                            id="choices-year"
                          ></select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <label className="form-label">Email </label>
                      <div className="input-group input-group-outline">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@email.com"
                          value={userData?.email}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label"> Number </label>
                      <div className="input-group input-group-outline">
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="input-group input-group-outline">
                        <label className="form-label">PAN number </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group input-group-outline">
                        <label className="form-label">GSt Number </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row"></div>
                </div>
              </div>
              <div className="card mt-4" id="password">
                <div className="card-header">
                  <h5>Change Password</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="input-group input-group-outline">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-4">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline">
                    <label className="form-label">Confirm New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <h5 className="mt-5">Password requirements</h5>
                  <p className="text-muted mb-2">
                    Please follow this guide for a strong password:
                  </p>
                  <ul className="text-light ps-4 mb-0 float-start">
                    <li>
                      <span className="text-sm ">One special characters</span>
                    </li>
                    <li>
                      <span className="text-sm">Min 6 characters</span>
                    </li>
                    <li>
                      <span className="text-sm">
                        One number (2 are recommended)
                      </span>
                    </li>
                    <li>
                      <span className="text-sm">Change it often</span>
                    </li>
                  </ul>
                  <button className="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">
                    Update password
                  </button>
                </div>
              </div>
              <div className="card mt-4" id="password">
                <div className="card-header">
                  <h5>Bank Details</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="input-group input-group-outline">
                    <label className="form-label">account holder name</label>
                    <input type="name" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-4">
                    <label className="form-label">bank account number</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline">
                    <label className="form-label">ifsc code</label>
                    <input type="number" className="form-control" />
                  </div>
                  <br />
                  <div className="input-group input-group-outline">
                    <label className="form-label">branch</label>
                    <input type="name" className="form-control" />
                  </div>
                  <br />
                  <div className="input-group input-group-outline">
                    <label className="form-label">Upi id</label>
                    <input type="name" className="form-control" />
                  </div>
                  <button className="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">
                    Submit Details
                  </button>
                </div>
              </div>
              Card Delete Account
              <div className="card mt-4" id="delete">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-sm-0 mb-4">
                    <div className="w-50">
                      <h5>Log out</h5>
                      <p className="text-sm mb-0"> Logout from the devices</p>
                    </div>
                    <div className="w-50 text-end">
                      <button
                        className="btn bg-gradient-danger mb-0 ms-1"
                        type="button"
                        name="button"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
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

export default Profile;
