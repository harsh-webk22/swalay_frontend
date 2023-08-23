const Footer = () => {
  return (
    <footer className="footer py-4 ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              ©<script>document.write(new Date().getFullYear())</script>, made
              with <i className="fa fa-heart"></i> by
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
                  className="nav-link text-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.swalay.talantoncore.in/"
                  className="nav-link text-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.swalay.talantoncore.in/swalay-merch"
                  className="nav-link text-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Merch
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.swalay.talantoncore.in/pricing"
                  className="nav-link pe-0 text-light"
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
  );
};

export default Footer;
