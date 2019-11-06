import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import HomePage from './pages/homepage/homePage';
import SigninPage from './pages/signinpage/signinPage';
import SignupPage from './pages/signuppage/signupPage';
import AddItenarary from './pages/additenarary/addItenarary';
// import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  render() {
    return (
      <Router>
        <HomePage path="/" />
        <SigninPage path="/signin" />
        <SignupPage path="/signup" />
        <AddItenarary path="/additenarary" />
      </Router>
    );
  }
  
}

export default App;
