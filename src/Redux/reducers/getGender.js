import { userConstants } from "../constants";

const initialState = {
  gender: []
};

export function getGender(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_GENDER_REQUEST:
      return {
        ...state,
        token: "",
        loader: true
      };
    case userConstants.GET_GENDER_SUCCESS:
      return {
        ...state,
        gender: action.payload
      };
    case userConstants.GET_GENDER_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
