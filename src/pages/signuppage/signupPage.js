import React from 'react';
import { Link } from 'react-router-dom';
import { signUpWithEmail, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignupPage extends React.Component {
   constructor() {
    super();

    this.emailInput = React.createRef();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }
  componentDidMount() {
    this.emailInput.current.focus();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSignup = () => {
    const { email, password, passwordConfirmation } = this.state;
    signUpWithEmail(email,password).then(user => {
      
      createUserProfileDocument(user.user).then(() => {
        
      }).catch(e => {
        console.log(e);
      })
      
    }).catch(e => {
      console.log(e, e.email);
    })

  }

  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <input
          onChange={this.handleChange} 
          autoFocus
          data-testid="signupEmail"
          type="email"
          value={email}
          name="email"
          ref={this.emailInput}
        />
        <input
          onChange={this.handleChange} 
          data-testid="signupPassword"
          type="password"
          value={password}
          name="password"
        />
        <input
          onChange={this.handleChange} 
          data-testid="signupPasswordConfirmation"
          type="password"
          value={passwordConfirmation}
          name="passwordConfirmation"
        />
        <button data-testid="signupBtn" onClick={this.handleSignup}>Sign In</button>
        
      </div>
    )
  }
}

export default SignupPage;