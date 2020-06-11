import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import Registration from './pages/Registration';
import Generic from './pages/Generic';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import legalDisclaimer from './components/legal_disclaimer';

const Apps = styled.div`
    text-align: center;
    --menu-bg-dark: #4050B3;
    --bg-light: #f4f4f4;
    --text-light: white;
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
