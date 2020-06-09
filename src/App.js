import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import Registration from './pages/Registration';
import Generic from './pages/Generic';
import SearchResult from './pages/SearchResult';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import legalDisclaimer from './components/legal_disclaimer';

const Apps = styled.div`
    text-align: center;
    --blue: #1730FF;
    --pink: #F4928F;
    --green: #24A198;
    --yellow: #F4B432;
    --red: #EB483E;
    --white: #FFFFFF;
`;

function App () {
  const isHomePage = true;
  return (
    <Apps>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home isHomePage={isHomePage} />
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
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/legaldisclaimer'>
            <Generic legalDisclaimer={legalDisclaimer} />
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
