import React from 'react';
import {  
  Link,
  Redirect
} from 'react-router-dom';
import { signInWithFacebook, auth, signInWithEmail } from '../../firebase/firebase.utils';

class SigninPage extends React.Component {
  constructor() {
    super();

    this.emailInput = React.createRef();
    this.state = {
      email: '',
      password: '',
    }
  }
  
  

  componentDidMount() {
    const { history } = this.props;
    if (auth.currentUser) {
      history.push("/");
    }
    this.emailInput.current.focus();
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSigninWithFb = () => {
    signInWithFacebook().then(result => {
      const { location, history } = this.props;
      const { from } = location.state || {from: {pathname: '/'}};
      history.replace(from)
    }).catch(e => {
      console.log(e);
    });
   
  }

  handleSignin = () => {
    const { email, password } = this.state;
    signInWithEmail(email,password).then(user => {
    const { location, history } = this.props;
    const { from } = location.state || {from: {pathname: '/'}};
      history.replace(from)
    }).catch(e => {
      console.log(e, e.email);
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Sign in</h1>
        <input 
          autoFocus
          data-testid="signinEmail"
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailInput}
        />
        <input 
          data-testid="signinPassword"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button data-testid="signinBtn" onClick={this.handleSignin}>Sign In</button>
        <button data-testid="signinFacebookBtn" onClick={this.handleSigninWithFb}>Sign in with Facebook</button>
        <div>
          Do not have account yet, <Link data-testid="signupLink" to="/signup">Sign up here...</Link>
        </div>
      </div>
    );
  }
}

export default SigninPage;