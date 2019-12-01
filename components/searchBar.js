import React from "react";
import { connect } from "react-redux";
import searchProduct from "../actions/search_product";
import inStockCheck from "../actions/inStockCheck";

let Searchbar = ({ dispatch }) => {
  return (
    <div>
      <form>
        <div>
          <label className="theLabels"> Search Product </label>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              e.preventDefault();
              dispatch(searchProduct(e.target.value));
            }}
          />
        </div>
        <p>
          <input
            type="checkbox"
            id="stockCheck"
            onChange={() => {
              if (document.getElementById("stockCheck").checked) {
                dispatch(inStockCheck(true));
              } else {
                dispatch(inStockCheck(false));
              }
            }}
          />{" "}
          Only show products in stock
        </p>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("SearchBar state:", state);

  return {
    checkStock: state.checkStock.inStockOnly,
    search: state.search.filterText
  };
}

Searchbar = connect(mapStateToProps)(Searchbar);
export default Searchbar;
