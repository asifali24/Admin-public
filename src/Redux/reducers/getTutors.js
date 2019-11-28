import { userConstants } from "../constants";

const initialState = {
  users: []
};

export function getTutors(state = initialState, action) {
  // console.log(action.type);
  // console.log(
  //   "*********************________**(())))))9990909_____________------------------------"
  // );
  switch (action.type) {
    case userConstants.GET_TUTORS_REQUEST:
      return {
        ...state,
        token: ""
      };
    case userConstants.GET_TUTORS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case userConstants.GET_TUTORS_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
