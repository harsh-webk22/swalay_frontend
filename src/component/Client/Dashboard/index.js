import React from "react";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <div
      className="g-sidenav-show  bg-gray-200 dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
       
        <div className="container-fluid py-4"/>
          <div className="row">
          <div class="col-lg-12 position-relative z-index-2">
          <div class="card mb-4 ">
            <div class="d-flex">
            </div>
            <h3 class=" ms-3 mt-2 text-bold ">Dashboard</h3>
          </div>
          <div class="card-body p-1">
            <div class="row">
              <div class="col-lg-6 col-md-7">
                <div class="table-responsive">
                  <table class="table align-items-center ">
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>



             {/* card */}
             <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card  mb-2">
              <div class="card-header p-3 pt-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">library_music</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize text-bold ">total songs</p>
                  <h4 class="mb-0">100</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0"/>
              <div class="card-footer p-3">
                <p class="mb-0"/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-sm-0 mt-4">
            <div class="card  mb-2">
              <div class="card-header p-3 pt-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">done_all</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize text-bold">Live</p>
                  <h4 class="mb-0">50</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0"/>
              <div class="card-footer p-3">
                <p class="mb-0"/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div class="card  mb-2">
              <div class="card-header p-3 pt-2 bg-transparent">
                <div
                  class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">pending_actions</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize text-bold">pending</p>
                  <h4 class="mb-0 ">30</h4>
                </div>
              </div>
              <hr class="horizontal my-0 dark"/>
              <div class="card-footer p-3">
                <p class="mb-0 "/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div class="card ">
              <div class="card-header p-3 pt-2 bg-transparent">
                <div
                  class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">close</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize text-bold ">rejected </p>
                  <h4 class="mb-0 ">20</h4>
                </div>
              </div>
              <hr class="horizontal my-0 dark"/>
              <div class="card-footer p-3">
                <p class="mb-0 "></p>
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

            <footer className="footer py-4  ">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="copyright text-center text-sm text-muted text-lg-start">
                      ©<script>document.write(new Date().getFullYear())</script>
                      , made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-weight-bold"
                        rel="noreferrer"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
