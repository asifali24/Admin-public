import { userConstants } from "../constants";

const initialState = {
  school: []
};

export function getSchool(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_SCHOOL_REQUEST:
      return {
        ...state,
        token: "",
        loader: true
      };
    case userConstants.GET_SCHOOL_SUCCESS:
      return {
        ...state,
        school: action.payload
      };
    case userConstants.GET_SCHOOL_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
