import { userConstants } from "../constants";
const initialState = {
  loader: false,
  status: { notes: "Verified", is_verified: true }
};

export function verifyUser(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case userConstants.CHANGE_STATUS_REQUEST:
      return {
        ...state,
        status: action.payload,
        loader: true
      };
    case userConstants.CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload,
        loader: false
      };
    case userConstants.CHANGE_STATUS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false
      };
    case userConstants.CLEAR:
      return {
        loader: false
      };
    default:
      return state;
  }
}
