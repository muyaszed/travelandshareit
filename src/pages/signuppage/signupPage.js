import React from 'react';
import { signUpWithEmail, createUserProfileDocument } from '../../firebase/firebase.utils';
import Form from '../../components/form/form.component';
import InputText from '../../components/inputText/inputText.component';
import PrimaryBtn from '../../components/primary-btn/primary-btn.component';
import styles from './signup.module.scss'

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
      <Form title="SIGN UP">
        <InputText 
          autoFocus
          placeHolder="Your email..."
          data-testid="signupEmail"
          type="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailInput}
        />
        <InputText 
          data-testid="signupPassword"
          placeHolder="Your password..."
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <InputText 
          data-testid="signupPasswordConfirmation"
          placeHolder="again...."
          type="password"
          value={passwordConfirmation}
          onChange={this.handleChange}
        />
        <div className={styles.signupBtnContainer}>
          <PrimaryBtn 
            title="SIGN UP"
            testid="signupBtn"
            onClick={this.handleSignup}
          />
        </div>
        <div className={styles.signupNote}>
          <p>Already have account</p>  
          <PrimaryBtn 
            title="Sign in here..."
            type="Link"
            testid="signinLink"
            to="/signin"
          />
        </div>
        
      </Form>
    )
  }
}

export default SignupPage;