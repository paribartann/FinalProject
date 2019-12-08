import { combineReducers } from "redux";
import addReducer from "./addReducer";
import searchReducer from "./searchReducer";
import checkStockReducer from "./inStockCheckReducer";
import addCategory from "./addCatergory";

export default combineReducers({
  add: addReducer,
  addCategory : addCategory,
  search: searchReducer,
  checkStock: checkStockReducer
});
