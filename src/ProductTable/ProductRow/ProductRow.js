import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, price, stocked } = this.props;
    return (
      <tr className={stocked ? 'table-row stocked' : 'table-row'}>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

export default ProductRow;
