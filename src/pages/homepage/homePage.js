import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user.action';

class HomePage extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
            ...snapShot.data()
          });
        })
      }else {
        setCurrentUser(userAuth);
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
    const { currentUser } = this.props;
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);