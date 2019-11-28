import { userConstants } from "../constants";

const initialState = {
  sessions: []
};

export function getSession(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_SESSION_REQUEST:
      return {
        ...state,
        token: "",
        loader: true
      };
    case userConstants.GET_SESSION_SUCCESS:
      return {
        ...state,
        sessions: action.payload
      };
    case userConstants.GET_SESSION_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
