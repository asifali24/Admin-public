import { userConstants } from "../constants";

const initialState = {
  priceBucket: []
};

export function getPriceBucket(state = initialState, action) {
  console.log(action.payload, action.type);

  switch (action.type) {
    case userConstants.GET_PRICEBUCKET_REQUEST:
      return {
        ...state,
        token: "",
        loader: true
      };
    case userConstants.GET_PRICEBUCKET_SUCCESS:
      return {
        ...state,
        priceBucket: action.payload
      };
    case userConstants.GET_PRICEBUCKET_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
