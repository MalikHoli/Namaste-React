import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginDefault, SetLogin] = useState("Login");

  const toggleLogin = () => {
    loginDefault === "Login" ? SetLogin("Logout") : SetLogin("Login");
  };

  return (
    <div className="header">
      <img className="logo" src={LOGO_IMG} />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login" onClick={toggleLogin}>
            {loginDefault}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
