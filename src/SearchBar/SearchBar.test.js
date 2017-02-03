import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { shallow, mount } from 'enzyme';

describe('<SearchBar />', () => {

  const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  const productsStocked = products.filter(product => product.stocked);
  const wrapper = mount(<SearchBar products={products} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
  });

  it('should have at least 1 product data in props', () => {
    expect(wrapper.props().products.length).toBeGreaterThan(0);
  });

  it('should filter', () => {
    const search = wrapper.find('.product-search');
    search.simulate('change', {value: "Baseball"});
    expect(wrapper.props().products.length).toBeLessThan(2);
  });
})
