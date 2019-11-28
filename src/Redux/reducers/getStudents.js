import { userConstants } from "../constants";

const initialState = {
  users: []
};

export function getStudents(state = initialState, action) {
  // console.log(action.type);
  // console.log(
  //   "*********************________**(())))))9990909_____________------------------------"
  // );
  switch (action.type) {
    case userConstants.GET_STUDENT_REQUEST:
      return {
        ...state,
        token: "",
        loader: true
      };
    case userConstants.GET_STUDENT_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case userConstants.GET_STUDENT_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
