import { ADD_CATEGORY } from "../actions/action_types";

const initialCategoryState = {
  CATEGORY: [
    {
      value: "Electronics"
    },
    {
      value: "Sporting Goods"
    }
  ]
};

export default function(state = initialCategoryState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      console.log(action.payload);
      return Object.assign({}, state, {
        CATEGORY: state.CATEGORY.concat(action.payload)
      });

    default:
      return state;
  }
}
