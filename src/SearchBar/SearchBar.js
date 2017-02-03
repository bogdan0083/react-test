import React, {
    Component
} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleFilterChange(e) {
      this.props.onFilterChange(e.target.checked);
    }

    handleSearchChange(e) {
      // trim and lowercase value before triggering function
      this.props.onSearchChange( e.target.value.toLocaleLowerCase().trim() );
    }

    render() {
      return (
        <div>
          <input type="search" className="product-search" onChange={this.handleSearchChange} />
          <div>
            <label>
              <input type="checkbox"
              onChange={this.handleFilterChange}
              className="checkbox-in-stock"/> Only show products in stock </label>
          </div>
        </div>
      );
    }
}


export default SearchBar;
