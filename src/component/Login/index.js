import logo from "../../assets/img/SwaLay.webp";
import "./index.css";

const Login = () => {
  return (
    <div className="main-w3layouts wrapper">
      <div className="cen">
        <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
      </div>

      <div className="main-agileinfo">
        <div className="agileits-top">
          <form action="#" method="post">
            <input
              className="text email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="text w3lpass"
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />

            <div className="wthree-text">
              <label className="anim">
                <input type="checkbox" className="checkbox" required="" />
                <span>I Agree To The Terms & Conditions</span>
              </label>
              <div className="clear"></div>
            </div>
            <input type="submit" value="LOGIN" />
          </form>
          {/* <!-- <p>Already have an Account? <a href="#"> Login Now!</a></p> --> */}
        </div>
      </div>
      {/* <!-- copyright --> */}
      <div className="colorlibcopy-agile">
        <p>
          ©<script>document.write(new Date().getFullYear());</script>, made with
          🤍 by
          <a
            href="https://www.creative-tim.com"
            className="font-weight-bold"
            target="_blank"
            rel="noreferrer"
          >
            Swalay
          </a>
        </p>
      </div>
      {/* <!-- //copyright --> */}
    </div>
  );
};

export default Login;
