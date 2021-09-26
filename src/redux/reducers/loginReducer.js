import {
  LOGIN_ERROR,
  LOGIN_ERROR_CLEAR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SET_LOGIN_USER,
} from "./../actions/types";

const initialState = {
  isLoading: false,
  errors: {},
  isAuthenticated: false,
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_ERROR:
      return { ...state, isLoading: false, errors: action.payload, user: {} };

    case LOGIN_ERROR_CLEAR:
      return { ...state, isLoading: false, errors: {}, user: {} };

    case LOGIN_RESPONSE:
      return { ...state, isLoading: false };

    case SET_LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        errors: {},
        isAuthenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
