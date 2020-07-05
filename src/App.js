import React, { useState } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Listing from './pages/Listing';
import MailInfo from './pages/MailInfo';
import Registration from './pages/Registration';
import LegalDisclaimer from './pages/LegalDisclaimer';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Bold from './font/BalooBhaina2-Bold.ttf';
import ExtraBold from './font/BalooBhaina2-ExtraBold.ttf';
import Medium from './font/BalooBhaina2-Medium.ttf';
import Regular from './font/BalooBhaina2-Regular.ttf';
import SemiBold from './font/BalooBhaina2-SemiBold.ttf';
import Footer from './components/Footer';
import Edition from './pages/Edition.js';
import Header from './components/Header';
import AuthContext from './Auth/AuthContext';
import EditionContextProvider from './components/FormEdition/EditionContextProvider';
import jwtDecode from 'jwt-decode';

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
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('authToken', token);
    setToken(token);
  };
  let userNameFromToken = null;
  if (token) {
    userNameFromToken = jwtDecode(token).sub || null;
  }

  return (
    <Apps>
      <AuthContext.Provider value={{ token: token, saveToken: (token) => (setTokenInLocalStorage(token)) }}>
        {userNameFromToken && <div><p>Welcome back {userNameFromToken} !</p><button onClick={() => setTokenInLocalStorage('')}>Log out</button></div>}
        <EditionContextProvider>
          <Router>
            <Header />
            <main style={{ flex: '1 0 auto' }}>
              <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/detail'><Detail /></Route>
                <Route path='/detail/:id'><Detail /></Route>
                <Route path='/liste_freelance'><Listing /></Route>
                <Route path='/inscription'><Registration /></Route>
                <Route path='/connexion'><SignIn /></Route>
                <Route path='/compte'><Edition /></Route>
                <Route path='/edition_compte'><Edition /></Route>
                <Route path='/mentions_legales'><LegalDisclaimer /></Route>
                <Route path='/reception_email'><MailInfo /></Route>
              </Switch>
            </main>
            <Footer />
          </Router>
        </EditionContextProvider>
      </AuthContext.Provider>
    </Apps>
  );
}

export default App;
