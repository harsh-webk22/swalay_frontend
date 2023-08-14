import Sidebar from "../Sidebar";

const Album = () => {
  return (
    <div className="g-sidenav-show  bg-gray-200 dark-version h-full">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* <!-- Navbar -->

        <!-- End Navbar --> */}
        <div className="container-fluid py-3">
          <div className="row mt-1">
            <div className="col-12">
              <div className="card">
                <div className="row mt-1">
                  <div className="col-12">
                    <div className="card">
                      {/* <!-- Card header --> */}
                      <div className="card-header">
                        <h3 className="mb-0">
                          <i>All Albums</i>
                        </h3>
                        <p className="text-sm mb-0">
                          your all albums will be showen here
                        </p>
                      </div>
                      <div className="table-responsive">
                        <table
                          className="table table-flush bg-gray-200 dark-version"
                          id="datatable-search"
                        >
                          <thead className="thead-light bg-gray-200 dark-version">
                            <tr className="bg-gray-200 dark-version">
                              <th className="bg-gray-200 dark-version">
                                Album Name
                              </th>
                              <th className="bg-gray-200 dark-version">
                                total track
                              </th>
                              <th className="bg-gray-200 dark-version">
                                Artist Name
                              </th>
                              <th className="bg-gray-200 dark-version">
                                Lable
                              </th>
                              <th className="bg-gray-200 dark-version">
                                Release date
                              </th>
                              <th className="bg-gray-200 dark-version">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                Maan Meri Jaan
                              </td>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                50
                              </td>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                Raghav
                              </td>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                61
                              </td>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                2011/04/25
                              </td>
                              <td className="text-sm font-weight-normal bg-gray-200 dark-version">
                                Live
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <footer className="footer py-4  ">
                  <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                          ©<span>2023</span>, made with{" "}
                          <i className="fa fa-heart"></i> by
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Album;
