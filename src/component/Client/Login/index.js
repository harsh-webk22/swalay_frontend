import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiendpoint } from "../../helper/apiendpoint";
import logo from "../../../assets/img/SwaLay.webp";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Alert the user is username or password is empty
    if (!username || !password) {
      alert("Please fill both username and password");
      return;
    }

    try {
      let res = await fetch(`${apiendpoint}/client/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        alert("Authentication failed!");
        return;
      }

      // Save the JWT token to the localstorage
      res = await res.json();
      localStorage.setItem("token", res.token);

      // If authentication is successful navigate to dashboard
      navigate("/");
    } catch (err) {
      alert("Authentication failed!");
      return;
    }
  };

  return (
    <div
      className="main-w3layouts wrapper dark-version"
      style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
    >
      <div className="cen">
        <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
      </div>

      <div className="main-agileinfo">
        <div className="agileits-top">
          <input
            className="text email"
            name="username"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text w3lpass"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="LOGIN" onClick={handleLogin} />
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
