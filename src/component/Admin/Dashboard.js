import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version">
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-12 position-relative z-index-2">
              <div className="card mb-4 ">
                <div className="d-flex"></div>
                <h3 className="mt-1 mb-1 ms-5 ">Dashboard</h3>
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

            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card  mb-2">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">library_music</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
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
                      <p className="text-sm mb-0 text-capitalize">Live</p>
                      <h4 className="mb-0">50</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3" />
                  <p className="mb-0"> </p>
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
                    <p className="text-sm mb-0 text-capitalize ">pending</p>
                    <h4 className="mb-0 ">30</h4>
                  </div>
                </div>
                <hr className="horizontal my-0 dark" />
                <div className="card-footer p-3">
                  <p className="mb-0 "></p>
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
                    <p className="text-sm mb-0 text-capitalize ">rejected </p>
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

          <div className="row mb-1 mt-">
            <div className="col-lg-1 col-md-0 mt-1 mb-4">
              <div className="card z-index- ">
                <div className="card-header p-0 position-relative mt-n0 mx-0 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-0 pe-0">
                    <div className="chart">
                      <canvas
                        id="chart-bars"
                        className="chart-canvas"
                        height="0"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-md-0 mt-1 mb-4">
              <div className="card z-index-  ">
                <div className="card-header p-0 position-relative mt-n0 mx-0 z-index-0 bg-transparent">
                  <div className="bg-gradient-success shadow-success border-radius-lg py-0 pe-0">
                    <div className="chart">
                      <canvas
                        id="chart-line"
                        className="chart-canva"
                        height="0"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-1 mt-">
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

export default AdminDashboard;
