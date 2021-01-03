/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedUser = useSelector((state) => state.session);
  const { userInfo } = loggedUser;

  return (
    <Route
      {...rest}
      render={() => (userInfo ? children : <Redirect to={{ pathname: "/" }} />)}
    />
  );
};

export default PrivateRoute;
