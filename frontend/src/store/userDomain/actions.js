import userService from "../../services/AxiosUserService";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./constants";

/* eslint-disable import/prefer-default-export */
export const login = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const token = await userService.login(username, password);
      const userData = await userService.authenticated(token);
      // localStorage.setItem("@session", JSON.stringify(userData));

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { ...userData },
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
