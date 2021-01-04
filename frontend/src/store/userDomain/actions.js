import userService from "../../services/AxiosUserService";
import authService from "../../services/AxiosAuthService";
import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "./constants";

/* eslint-disable import/prefer-default-export */
export const login = (username, password) => async (dispatch) => {
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

export const logout = () => (dispatch) => {
  localStorage.removeItem("@session");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_DETAILS_RESET });
};

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { session } = getState();
    const { token } = session.userInfo;
    const userList = await userService.listAll(token);
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

export const getUser = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { session } = getState();
    const { token } = session.userInfo;
    const user = await userService.find(userId, token);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CREATE_REQUEST });
    const { session } = getState();
    const { token } = session.userInfo;
    await userService.create(userData, token);
    dispatch({ type: USER_CREATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const { session } = getState();
    const { token } = session.userInfo;
    await userService.update(userData, token);
    dispatch({ type: USER_UPDATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
