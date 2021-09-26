import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_ERROR_CLEAR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SET_LOGIN_USER,
} from "./types";

export const loginRequest = (user, history) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  dispatch(loginErrorClear());
  axios

    .post("http://localhost:5000/api/user/login", user)
    .then((res) => {
      console.log("login success", res);

      //set login user data to state
      dispatch(setLoginUser(res.data.user));

      //redirecting to account page
      history.push("/your_account");
    })
    .catch((err) => {
      dispatch(loginError(err.response.data.errors));
      console.log(err.response.data.errors);
    });

  dispatch(LoginResponse());
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const loginErrorClear = () => {
  return {
    type: LOGIN_ERROR_CLEAR,
  };
};

export const LoginResponse = () => {
  return {
    type: LOGIN_RESPONSE,
  };
};

export const setLoginUser = (user) => {
  return {
    type: SET_LOGIN_USER,
    payload: user,
  };
};
