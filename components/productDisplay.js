import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import { connect } from "react-redux";
import ProductRow from "./ProductRow";

class ProductDisplay extends Component {
  render() {
    const filterText = this.props.search.filterText;
    const inStockOnly = this.props.checkStock.inStockOnly;

    const rows = [];
    let lastCategory = null;

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
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div style={{ paddingLeft: "650px" }}>
        <h3>List of Items in our WareHouse</h3>
        <table style={{ border: "solid 1px" }}>
          <thead>
            <tr>
              <th style={{ paddingRight: "50px" }}>Name</th>
              <th style={{ paddingLeft: "50px" }}>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    add: state.add.PRODUCTS,
    checkStock: state.checkStock,
    search: state.search
  };
}

export default connect(mapStateToProps)(ProductDisplay);
