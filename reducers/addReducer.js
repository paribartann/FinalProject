import { ADD_ITEMS } from "../actions/action_types";

const initialState = {
  PRODUCTS: [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ]
};



export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS:
      console.log(action.payload);
      return Object.assign({}, state, {
        PRODUCTS: state.PRODUCTS.concat(action.payload)
      });

    default:
      return state;
  }
}

