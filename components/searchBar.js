import React, { useState } from "react";
import { connect } from "react-redux";
import searchProduct from "../actions/search_product";
import inStockCheck from "../actions/inStockCheck";
import { SearchBar } from "react-native-elements";
import {
  KeyboardAvoidingView,
  Text,
  View
} from "react-native";
import { CheckBox } from 'react-native-elements'
import {
  ListItem
} from "native-base";
let Searchbar = ({ dispatch, checkStock }) => {
  console.log("CHECKSTOCK === ", checkStock);
  const [query, setQuery] = useState("");

  return (
    <KeyboardAvoidingView>
      <SearchBar
        placeholder="Enter the product Name"
        onChangeText={text => {
          setQuery(text);
          dispatch(searchProduct(text));
        }}
        inputStyle={{ color: "white" }}
        value={query}
      />
      <ListItem>
          <CheckBox
            checked={checkStock}
            onPress={() => dispatch(inStockCheck(!checkStock))}
          />
          <Text>Only show products in stock</Text>
      </ListItem>
    </KeyboardAvoidingView>
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


