import { userConstants } from "../constants";
const initialState = {
  loader: false,
  AddSubscription: {
    sessions: null,
    duration: null,
    price: null,
    price_bucket_id: null
  }
};

export function addSubscription(state = initialState, action) {
  switch (action.type) {
    case userConstants.ADD_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        addSubject: action.payload,
        loader: true
      };
    case userConstants.ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        addSubject: action.payload,
        loader: false
      };
    case userConstants.ADD_SUBSCRIPTION_FAILURE:
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
