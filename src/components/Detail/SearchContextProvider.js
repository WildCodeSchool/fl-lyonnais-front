import React, {useState} from 'react';
import SearchContext from './SearchContext';


class SearchContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultOfSearch :[],
      tagsFilter: []
    };
  }
  uploadSearch = (ser) => {
    this.setState({resultOfSearch: ser})
  }

  handleTagsFilter = (tagsFilter) => {
    this.setState({tagsFilter})
  }

  render() {
    return (
        <SearchContext.Provider value={{...this.state,handleTagsFilter:this.handleTagsFilter,uploadSearch: this.uploadSearch}}>
        {this.props.children}
        </SearchContext.Provider>
    );
  };
}

export default SearchContextProvider;