import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import SigninPage from './pages/signinpage/signinPage';
import SignupPage from './pages/signuppage/signupPage';
import AddItenarary from './pages/additenarary/addItenarary';
import ProtectedRoute from './container/protected.container';
import { checkUserAuth } from './firebase/firebase.utils';


class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    
    this.unsubscribeFromAuth = checkUserAuth('app');
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <ProtectedRoute path="/additenarary" component={AddItenarary} />
      </Switch>
    );
  }
  
}



export default App;
