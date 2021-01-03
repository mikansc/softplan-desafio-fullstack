/* eslint-disable arrow-body-style */
import userService from "../../services/AxiosUserService";
import authService from "../../services/AxiosAuthService";
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./constants";

/* eslint-disable import/prefer-default-export */
export const login = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const token = await authService.login(username, password);
      const userData = await authService.authenticated(token);
      const sessionData = { ...userData, token };
      localStorage.setItem("@session", JSON.stringify(sessionData));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: sessionData,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("@session");
  dispatch({ type: USER_LOGOUT });
};

export const getUsers = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LIST_REQUEST });
      const { session } = getState();
      const userList = await userService.listAll(session.userInfo.token);
      dispatch({
        type: USER_LIST_SUCCESS,
        payload: userList,
      });
    } catch (error) {
      dispatch({
        type: USER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
