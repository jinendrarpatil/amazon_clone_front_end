import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_ERROR_CLEAR,
  REGISTER_RESPONSE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  errors: {},
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case REGISTER_RESPONSE:
      return { ...state, isLoading: false };

    case REGISTER_ERROR:
      return { ...state, isLoading: false, errors: action.payload };

    case REGISTER_ERROR_CLEAR:
      return { ...state, isLoading: false, errors: {} };

    default:
      return state;
  }
}
