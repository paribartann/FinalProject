import React, { Component } from "react";
import { Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <Text style={{ color: "red" }}>{product.name}</Text>
    );

    return (
      <Row>
        <Rows style={{ paddingRight: "50px" }}>{name}</Rows>
        <Rows style={{ paddingLeft: "50px" }}>{product.price}</Rows>
      </Row>
    );
  }
}

export default ProductRow;
