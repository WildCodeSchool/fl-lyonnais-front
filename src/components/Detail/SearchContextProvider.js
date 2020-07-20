import React from 'react';
import SearchContext from './SearchContext';


class SearchContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultOfSearch :[],
      tagsFilter: [],
      tjmMarkers: [],
      search: '',
      currentPage: 1,
      freelancesPerPage: 20
    };
  }
  upLoadResultOfSearch = (ser) => {
    this.setState({resultOfSearch: ser})
  }

  handleTagsFilter = (tagsFilter) => {
    this.setState({tagsFilter})
  }

  // Purge du tableau des tags
  resetTagsFilter = () => {
    this.setState([]);
  }

  handleTjmMarkers = (tjmMarkers) => {
    this.setState({ tjmMarkers })
  }

  updateSearch = (search) => {
    this.setState({ search })
  }
  
  render() {
    return (
        <SearchContext.Provider value={{
          ...this.state,
          handleTagsFilter: this.handleTagsFilter,
          upLoadResultOfSearch: this.upLoadResultOfSearch,
          handleTjmMarkers: this.handleTjmMarkers,
          resetTagsFilter: this.resetTagsFilter,
          updateSearch: this.updateSearch
        }}>
        {this.props.children}
        </SearchContext.Provider>
    );
  };
}

export default SearchContextProvider;