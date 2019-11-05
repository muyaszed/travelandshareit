import React from 'react';
import { navigate } from '@reach/router';
import { signInWithFacebook, getRedirectResult } from '../../firebase/firebase.utils';

class SigninPage extends React.Component {
  constructor() {
    super();

    this.emailInput = React.createRef();
  }
  componentDidMount() {
    this.emailInput.current.focus();
    getRedirectResult().then(result => {
      console.log(result);
      if(result.user) {
        navigate('/');
      }
    }).catch(e => {
      console.log(e);
    })
  }

  handleSigninWithFb = () => {
    signInWithFacebook();
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>

      <input 
        autoFocus
        data-testid="signinEmail"
        type="email"
        ref={this.emailInput}
      />
      <input 
        data-testid="signinPassword"
        type="password"
      />
      <button data-testid="signinBtn">Sign In</button>
      <button data-testid="signinFacebookBtn" onClick={this.handleSigninWithFb}>Sign in with Facebook</button>
      </div>
    );
  }
}

export default SigninPage;