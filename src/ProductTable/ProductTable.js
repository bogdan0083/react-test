import React, {Component} from 'react';
import ProductRowHeader from './ProductRowHeader/ProductRowHeader';
import ProductRow from './ProductRow/ProductRow';
import './ProductTable.css';

//import ProductRow from './ProductRow/ProductRow';

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    /*
     transform products array of objects i
     */
    render() {
        const products = this.props.products;
        let rows = [];
        let lastCategory = null;

        /*
         iterate over an array to retrieve data about products
         */

        products.forEach(product => {
            if (lastCategory !== product.category) {
                rows.push(<ProductRowHeader key={product.category} name={product.category}/>);
            }

            rows.push(
                <ProductRow
                    key={product.name}
                    name={product.name}
                    price={product.price}
                    stocked={product.stocked}>
                </ProductRow>
            );

            lastCategory = product.category;
        });

        return (
            <table className="product-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

export default ProductTable;
