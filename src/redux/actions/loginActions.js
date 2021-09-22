import {
  LOGIN_ERROR,
  LOGIN_ERROR_CLEAR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SET_LOGIN_USER,
} from "./types";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
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
