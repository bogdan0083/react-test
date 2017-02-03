import React, { Component } from 'react';

class ProductRowHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryName = this.props.name;
    return (
      <tr>
        <th>{categoryName}</th>
      </tr>
    )
  }
}

export default ProductRowHeader;
