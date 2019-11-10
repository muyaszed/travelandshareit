import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homePage';
import SigninPage from './pages/signinpage/signinPage';
import SignupPage from './pages/signuppage/signupPage';
import AddItenarary from './pages/additenarary/addItenarary';
import ProtectedRoute from './container/protected.container';
import { checkUserAuth } from './firebase/firebase.utils';

import Header from './components/header/header.component';


class App extends React.Component {
  state = {
    scrollPos: 0
  }
  
  unsubscribeFromAuth = null;

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height
    this.setState({
      scrollPos: scrolled
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    this.unsubscribeFromAuth = checkUserAuth('app');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
    this.unsubscribeFromAuth()
  }

  renderBlackHeader = () => {
    const { currentUser } = this.props;
    const { scrollPos } = this.state;
    return scrollPos > 0.1 ?
    <Header currentUser={currentUser} bgColor="black" /> :
    null 
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className={styles.mainContainer}>
        <Header currentUser={currentUser} />
        {this.renderBlackHeader()}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
          <ProtectedRoute path="/additenarary" component={AddItenarary} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})


export default connect(mapStateToProps)(App);
