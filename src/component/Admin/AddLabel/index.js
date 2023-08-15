import "./index.css"

const AddLabel = () => {
  return (
    <div className="main-w3layouts wrapper dark-version">
      <h1>Label Activation</h1>
      <p>For Swalay Authorized Employees</p>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form action="#" method="post">
            <input
              className="text"
              type="text"
              name="Username"
              placeholder="Username"
              required=""
            />
            <input
              className="text email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="text number"
              type="number"
              name="contact"
              placeholder="contact"
              required=""
            />
            <input
              className="text record"
              type="text"
              name="Record Label"
              placeholder="Record Label"
              required=""
            />
            <input
              className="text"
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <input
              className="text w3lpass"
              type="password"
              name="password"
              placeholder="Confirm Password"
              required=""
            />
            <div className="wthree-text">
              <label className="anim">
                <input type="checkbox" className="checkbox" required="" />
                <span>I Agree To The Terms & Conditions</span>
              </label>
              <div className="clear"></div>
            </div>
            <input type="submit" value="Registration Now" />
          </form>
        </div>
      </div>

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
    </div>
  );
};

export default AddLabel;
