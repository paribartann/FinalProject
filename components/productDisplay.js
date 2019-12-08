import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import Searchbar from './searchBar';
import ProductCategoryRow from "./ProductCategoryRow";
import { connect } from "react-redux";
import ProductRow from "./ProductRow";

class ProductDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Price']
    }
  }

  render() {
    const state = this.state;
    const filterText = this.props.search.filterText;
    const inStockOnly = this.props.checkStock.inStockOnly;

    const rows = [];
    let lastCategory = null;
console.log("ADDD === ", this.props.add)
    const prod_array = this.props.add.sort((a, b) =>
      a.category > b.category ? 1 : -1
    );
    prod_array.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={Math.random()} />);
      lastCategory = product.category;
      console.log("ROWS === ", rows);
    });

    return (
      <View>
        <Searchbar />
        <Text style={{fontSize:24, fontWeight:"bold", textAlign:"center"}}>List of Items in our WareHouse</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {/* <Rows data={rows} textStyle={styles.text}/> */}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

function mapStateToProps(state) {
  return {
    add: state.add.PRODUCTS,
    checkStock: state.checkStock,
    search: state.search
  };
}

export default connect(mapStateToProps)(ProductDisplay);
