import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <Row>
        <Rows style={{ paddingTop: "10px" }} colSpan="2">
          <Text style={styles.bold}>{category}</Text>
        </Rows>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
});
export default ProductCategoryRow;
