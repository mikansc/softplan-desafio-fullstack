import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <h1 data-testid="projectLogo">SIPROJ - Softplan</h1>
      </div>
      <div className="right-data">
        <p className="span">
          Olá,
          <span className="user-name">Michael Nascimento</span>
        </p>
        <div className="sign-out">
          <i className="fas fa-sign-out-alt" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
