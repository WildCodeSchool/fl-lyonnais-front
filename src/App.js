import React, { useState } from 'react';
import Home from './pages/generic page/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import MailInfo from './pages/MailInfo';
import Registration from './pages/Registration';
import LegalDisclaimer from './pages/generic page/LegalDisclaimer';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Medium from './font/BalooBhaina2-Medium.ttf';
import Footer from './components/Footer';
import Edition from './pages/Edition.js';
import Header from './components/Header';
import AuthContext from './components/AuthContext';
import EditionContextProvider from './components/FormEdition/EditionContextProvider';
import SearchContextProvider from './components/Detail/SearchContextProvider';
import Chat from './components/Chat';
import GeneralConditions from './pages/generic page/GeneralConditions';
import Tags from './pages/Tags';
import AccountDeleted from './pages/AccountDeleted';

const Apps = styled.div`
    text-align: center;
    --blue: #1730FF;
    --green: #24947C;
    --red: #EB483E;
    --white: #FFFFFF;
    @font-face {font-family: 'BB-medium'; src: url(${Medium});}
    font-family: 'BB-medium', serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

function App () {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('authToken', token);
    setToken(token);
  };

  const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, saveUser, token: token, saveToken: (token) => (setTokenInLocalStorage(token)), setToken: setTokenInLocalStorage }}>
      <EditionContextProvider>
        <SearchContextProvider>
          <Apps>
            <Router>
              <Header />
              <main style={{ flex: '1 0 auto' }}>
                <Switch>
                  <Route exact path='/'><Home /></Route>
                  <Route path='/detail/:id' component={Detail} />
                  <Route path='/liste_freelance' component={Listing} />
                  <Route path='/inscription'><Registration /></Route>
                  <Route path='/connexion'><SignIn /></Route>
                  <Route path='/compte'><Edition /></Route>
                  <Route path='/mentions_legales'><LegalDisclaimer /></Route>
                  <Route path='/reception_email'><MailInfo /></Route>
                  <Route path='/account_deleted'><AccountDeleted /></Route>
                  <Route path='/conditions_generales'><GeneralConditions /></Route>
                  <Route path='/tags'><Tags /></Route>
                </Switch>
              </main>
              <Footer />
              <Chat />
            </Router>
          </Apps>
        </SearchContextProvider>
      </EditionContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
