const Footer = () => {
    return (
      <footer className="footer py-4  ">
        <div className="container-fluid ">
          <div className="row align-items-center justify-content-lg-between t">
            <div className="col-lg-6 mb-lg-0 mb-4 ">
              <div className="copyright text-center text-sm  text-lg-start  ">             
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold text-light"
                  target="_blank"
                  rel="noreferrer"
                >
                 Made by 🤍 From Swalay
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
  