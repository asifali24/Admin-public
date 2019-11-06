import { userConstants } from "../constants";
const initialState = {
  loader: false,
  AddAdmin: { email: "", password: "" }
};

export function addAdmins(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case userConstants.ADD_ADMIN_REQUEST:
      return {
        ...state,
        admin: action.payload,
        loader: true
      };
    case userConstants.ADD_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        loader: false
      };
    case userConstants.ADD_GENDER_FAILURE:
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
