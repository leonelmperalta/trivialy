import React, { Fragment } from "react";
import logo from "../images/logo-trivialy.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <img src={logo} alt="logo trivialy" className="logo-trivialy"/>
      </div>
    </Fragment>
  );
};

export default Header;
