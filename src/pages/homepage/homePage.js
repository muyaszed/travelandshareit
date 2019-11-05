import React from 'react';
import { navigate } from '@reach/router';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class HomePage extends React.Component {
  state = {
    currentUser: null,
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.id)
          this.setState({
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
          });
        })
      }else {
        this.setState({ currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  handleSignin = () => {
    navigate('/signin');
  }

  renderSignOutBtnandItenararyLink = () => {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      currentUser ?
      <div>
      <div data-testid="itenararyLink">
        Explore Itenarary
      </div> 
      <div data-testid="signoutBtn" onClick={() => auth.signOut()}>
        Sign Out
      </div>
      </div> :
      null
    )
  }
  render() {
    return (
      <div>
        <div data-testid="authLink" onClick={this.handleSignin}>
          Start sharing
        </div>
        { this.renderSignOutBtnandItenararyLink() }
      </div>
    )
  }
}

export default HomePage;