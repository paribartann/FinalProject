import { SEARCH_PRODUCT } from "../actions/action_types";

const initialState = {
  filterText: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      console.log(action.payload);
      return Object.assign({}, state, { filterText: action.payload });
    default:
      return state;
  }
}
