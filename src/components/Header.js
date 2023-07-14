import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
