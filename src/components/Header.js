import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Header.css";

// Assets
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";

const Header = () => (
  <header id="main-header">
    <div className="header-content">
      <Link to="/">
        <img src={logo} alt="Instagra" title="Instagra" />
      </Link>

      <Link to="/new">
        <img src={camera} alt="Enviar publicação" title="Enviar publicação" />
      </Link>
    </div>
  </header>
);

export default Header;
