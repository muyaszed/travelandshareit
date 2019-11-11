import React from 'react';
import {  
  Link,
  Redirect
} from 'react-router-dom';
import { signInWithFacebook, auth, signInWithEmail } from '../../firebase/firebase.utils';
import Form from '../../components/form/form.component';
import InputText from '../../components/inputText/inputText.component';
import PrimaryBtn from '../../components/primary-btn/primary-btn.component';
import styles from './signin.module.scss';

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
    console.log(this.emailInput);
    return (
      <Form title="SIGN IN">

        <InputText 
          autoFocus
          placeHolder="Your email..."
          data-testid="signinEmail"
          type="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailInput}
        />
        <InputText 
          data-testid="signinPassword"
          placeHolder="Your password..."
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <div className={styles.signinBtnContainer}>
          <PrimaryBtn 
            title="SIGN IN"
            testid="signinBtn"
            onClick={this.handleSignin}
          />
          <PrimaryBtn 
            title="USE FACEBOOK"
            testid="signinFacebookBtn"
            onClick={this.handleSigninWithFb}
          />
        </div>
        <div className={styles.signinNote}>

          <p>Do not have account yet</p>  
          <PrimaryBtn 
            title="Sign up here..."
            type="Link"
            testid="signupLink"
            to="/signup"
          />
        </div>
      </Form>
    );
  }
}

export default SigninPage;