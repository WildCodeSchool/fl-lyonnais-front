import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import Registration from './pages/Registration';
import Generic from './pages/Generic';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import styled from 'styled-components';
import legalDisclaimer from './components/legal_disclaimer';
import freelance from './JohnDoe';

function App () {
  const isHomePage = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home isHomePage={isHomePage} />
          </Route>
          <Route path='/detail'>
            <Detail freelance={freelance} />
          </Route>
          <Route path='/listing'>
            <Listing />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/legaldisclaimer'>
            <Generic legalDisclaimer={legalDisclaimer} />
          </Route>
          <Route path='/search-results'>
            <SearchResult />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
