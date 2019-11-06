import { userConstants } from "../constants";
const initialState = {
  loader: false,
  ticket: ""
};

export function addTickets(state = initialState, action) {
  console.log(action.type + "////////////////");
  console.log(action.payload + "***************");
  switch (action.type) {
    case userConstants.ADD_TICKET_REQUEST:
      return {
        ...state,
        ticket: action.payload,
        loader: true
      };
    case userConstants.ADD_TICKET_SUCCESS:
      return {
        ...state,
        ticket: action.payload,
        loader: false
      };
    case userConstants.ADD_TICKET_FAILURE:
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
