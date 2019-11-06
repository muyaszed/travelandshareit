import React from 'react';
import { navigate, Link, Redirect } from '@reach/router';
import { connect } from 'react-redux';
import { signInWithFacebook, getRedirectResult, signInWithEmail } from '../../firebase/firebase.utils';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSigninWithFb = () => {
    signInWithFacebook();
  }

  handleSignin = () => {
    const { email, password } = this.state;
    signInWithEmail(email,password).then(user => {
      navigate('/');
    }).catch(e => {
      console.log(e, e.email);
    })
  }

  renderSigninPage = () => {
    const { email, password } = this.state;
    const { currentUser } = this.props;
    return (
      currentUser ?
      <Redirect to='/additenarary' /> :
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
    )
  }

  render() {
    return (
      this.renderSigninPage()
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(SigninPage);