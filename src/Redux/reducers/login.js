import { userConstants } from "../constants";
const initialState = {
  loggedIn: false,
  user: null,
  loader: false,
  errorAlert: false
};

export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        loader: true
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
        loader: false,
        errorAlert: true
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
        loader: true,
        errorAlert: false
      };
    case userConstants.CLEAR:
      return { loader: false };
    default:
      return state;
  }
}
