import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import StyledNav from "./Navbar.style";
import { logout } from "../../store/userDomain/actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("Logout");
    dispatch(logout());
  };

  return (
    <StyledNav>
      <div className="logo">
        <h1 data-testid="projectLogo">SIPROJ - Softplan</h1>
      </div>
      <button type="button" className="icon" onClick={onClickHandler}>
        <ExitToAppIcon />
      </button>
    </StyledNav>
  );
};

export default Navbar;
