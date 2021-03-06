import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_ERROR_CLEAR,
  REGISTER_RESPONSE,
} from "./types";

import axios from "axios";
import { apiBaseURL } from "./../../components/utils/constant";

export const registerRequest = (user, history) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  dispatch(registerErrorClear());

  axios
    .post("http://localhost:5000/api/user/register", user)
    .then((res) => {
      //redirect user to login page
      history.push("/login");
    })
    .catch((err) => {
      dispatch(registerError(err.response.data.errors));
    });
  dispatch(registerResponse());
};

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
