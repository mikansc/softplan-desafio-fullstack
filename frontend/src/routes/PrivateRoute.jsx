/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedUser = useSelector((state) => {
    return state.session;
  });
  const { userInfo } = loggedUser;

  return (
    <Route
      {...rest}
      render={() => {
        return userInfo ? children : <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
};

export default PrivateRoute;
