import { combineReducers } from "redux";
import addReducer from "./addReducer";
import searchReducer from "./searchReducer";
import checkStockReducer from "./inStockCheckReducer";

export default combineReducers({
  add: addReducer,
  search: searchReducer,
  checkStock: checkStockReducer
});
