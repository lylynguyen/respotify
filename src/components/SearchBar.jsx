import React from 'react';
import styles from './../styles.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.getAlbums(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="searchBar">
        <h3>Search for an Artist</h3>
        <input className="searchBarInput" onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;
