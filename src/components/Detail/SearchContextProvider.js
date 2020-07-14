import React, {useState} from 'react';
import SearchContext from './SearchContext';


class SearchContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultOfSearch :[]
    };
  }
  uploadSearch = (ser) => {
    this.setState({resultOfSearch: ser})
  }
  render() {
    return (
        <SearchContext.Provider value={{...this.state, uploadSearch: this.uploadSearch}}>
        {this.props.children}
        </SearchContext.Provider>
    );
  };
}

export default SearchContextProvider;