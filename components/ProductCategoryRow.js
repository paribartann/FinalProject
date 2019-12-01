import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th style={{paddingTop:"10px"}} colSpan="2">
          <b><u>{category}</u></b>
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;