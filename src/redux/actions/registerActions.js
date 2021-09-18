import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_ERROR_CLEAR,
  REGISTER_RESPONSE,
} from "./types";

export const registerRequest = (userData, history) => (dispatch) => {};

export const registerError = (payload) => {
  return {
    type: REGISTER_ERROR,
    payload: payload,
  };
};

export const registerResponse = () => {
  return {
    type: REGISTER_RESPONSE,
  };
};

export const registerErrorClear = () => {
  return {
    type: REGISTER_ERROR_CLEAR,
  };
};
