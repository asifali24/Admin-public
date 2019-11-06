import { userConstants } from "../constants";
const initialState = {
  loader: false,
  AddSubject: { school: "", subject_name: "", subject_course: "" }
};

export function addSubjects(state = initialState, action) {
  switch (action.type) {
    case userConstants.ADD_SUBJECT_REQUEST:
      return {
        ...state,
        addSubject: action.payload,
        loader: true
      };
    case userConstants.ADD_SUBJECT_SUCCESS:
      return {
        ...state,
        addSubject: action.payload,
        loader: false
      };
    case userConstants.ADD_SUBJECT_FAILURE:
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
