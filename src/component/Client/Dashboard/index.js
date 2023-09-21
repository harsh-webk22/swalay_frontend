import React from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Dashboard = () => {
  return (
    <div
      className="g-sidenav-show  bg-gray-200 dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4" />
        <div className="row">
          <div className="col-lg-12 position-relative z-index-2">
            <div className="card mb-4 ">
              <div className="d-flex"></div>
              <h3 className=" ms-3 mt-2 text-bold ">Dashboard</h3>
            </div>
            <div className="card-body p-1">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="table-responsive">
                    <table className="table align-items-center "></table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card  mb-2">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">library_music</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize text-bold ">
                      total songs
                    </p>
                    <h4 className="mb-0">100</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-sm-0 mt-4">
              <div className="card  mb-2">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">done_all</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize text-bold">
                      Live
                    </p>
                    <h4 className="mb-0">50</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
              <div className="card  mb-2">
                <div className="card-header p-3 pt-2 bg-transparent">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">pending_actions</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize text-bold">
                      pending
                    </p>
                    <h4 className="mb-0 ">30</h4>
                  </div>
                </div>
                <hr className="horizontal my-0 dark" />
                <div className="card-footer p-3">
                  <p className="mb-0 " />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
              <div className="card ">
                <div className="card-header p-3 pt-2 bg-transparent">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">close</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize text-bold ">
                      rejected{" "}
                    </p>
                    <h4 className="mb-0 ">20</h4>
                  </div>
                </div>
                <hr className="horizontal my-0 dark" />
                <div className="card-footer p-3">
                  <p className="mb-0 "></p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-1 mt-4">
            <div className="mt-4">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg py-1 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-line-tasks"
                        className="chart-canvas"
                        height="500"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <h6 className="mb-0 mt-3 ">
                      Total Plays <h6 className="text-end"> 1000</h6>
                    </h6>
                  </div>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm">just updated</p>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
