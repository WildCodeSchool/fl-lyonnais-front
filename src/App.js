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
import Bold from './font/BalooBhaina2-Bold.ttf';
import ExtraBold from './font/BalooBhaina2-ExtraBold.ttf';
import Medium from './font/BalooBhaina2-Medium.ttf';
import Regular from './font/BalooBhaina2-Regular.ttf';
import SemiBold from './font/BalooBhaina2-SemiBold.ttf';
import Footer from './components/Footer';
import Header from './components/Header';
import freelance from './JohnDoe';

const Apps = styled.div`
    text-align: center;
    --blue: #1730FF;
    --pink: #F4928F;
    --green: #24A198;
    --yellow: #F4B432;
    --red: #EB483E;
    --white: #FFFFFF;
    @font-face {font-family: 'BB-bold'; src: url(${Bold});}
    @font-face {font-family: 'BB-extraBold'; src: url(${ExtraBold});}
    @font-face {font-family: 'BB-medium'; src: url(${Medium});}
    @font-face {font-family: 'BB-regular'; src: url(${Regular});}
    @font-face {font-family: 'BB-semiBold'; src: url(${SemiBold});}
    font-family: 'BB-medium', serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

function App () {
  const isHomePage = true;
  return (
    <Apps>
      <Router>
        <Header />
        <main style={{ flex: '1 0 auto' }}>
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
        </main>
        <Footer />
      </Router>
    </Apps>
  );
}

export default App;
