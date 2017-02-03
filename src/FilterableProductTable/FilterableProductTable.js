import React, {
    Component
} from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.products = [
          {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
          {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
          {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
          {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
          {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
          {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];

        this.state = { products: this.products }

        this.toggleFilterByStock = this.toggleFilterByStock.bind(this);
        this.filterBySearch = this.filterBySearch.bind(this);
    }

    filterBySearch(text) {
      text = text.toLowerCase().trim();
      console.log( text );
      const products = this.products;
      const filteredProducts = products.filter(product =>
        product.name.indexOf( text ) !== -1);

      this.setState({ products: filteredProducts });
    }

    toggleFilterByStock(checked) {
      const products = this.products;
      const filteredProducts = products.filter(product => product.stocked);

      this.setState({ products: checked ? filteredProducts : products });
    }

    render() {
      const products = this.state.products;
      return (
        <div>
          <SearchBar
            products={products}
            onFilterChange={this.toggleFilterByStock}
            onSearchChange={this.filterBySearch}
            />
          <ProductTable products={products} />
        </div>
      );
    }
}


export default FilterableProductTable;
