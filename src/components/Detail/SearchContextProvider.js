import React from 'react';
import SearchContext from './SearchContext';


class SearchContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultOfSearch :[],
      tagsFilter: [],
      tjmMarkers: []
    };
  }
  uploadSearch = (ser) => {
    this.setState({resultOfSearch: ser})
  }

  handleTagsFilter = (tagsFilter) => {
    this.setState({tagsFilter})
  }

  handleTjmMarkers = (tjmMarkers) => {
    this.setState({ tjmMarkers })
  }

  render() {
    return (
        <SearchContext.Provider value={{...this.state,handleTagsFilter:this.handleTagsFilter,uploadSearch: this.uploadSearch, handleTjmMarkers: this.handleTjmMarkers}}>
        {this.props.children}
        </SearchContext.Provider>
    );
  };
}

export default SearchContextProvider;