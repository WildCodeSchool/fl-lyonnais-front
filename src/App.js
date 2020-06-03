import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import Registration from './pages/Registration';
import Generic from './pages/Generic';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Apps = styled.div`
    text-align: center;
`;

function App () {
  return (
    <Apps>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/listing'>
            <Listing />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/generic'>
            <Generic />
          </Route>
          <Route path='/search-results'>
            <SearchResult />
          </Route>
        </Switch>
      </Router>
    </Apps>
  );
}

export default App;
