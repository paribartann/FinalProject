import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td style={{paddingRight:"50px"}}>{name}</td>
        <td style={{paddingLeft:"50px"}}>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;