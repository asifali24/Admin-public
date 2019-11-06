import { userConstants } from "../constants";
const initialState = {
  loader: false,
  gender: ""
};

export function addGenders(state = initialState, action) {
  switch (action.type) {
    case userConstants.ADD_GENDER_REQUEST:
      return {
        ...state,
        gender: action.payload,
        loader: true
      };
    case userConstants.ADD_GENDER_SUCCESS:
      return {
        ...state,
        gender: action.payload,
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
