import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import { auth } from '../../firebase/firebase.utils';


class HomePage extends React.Component {

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
        <Link data-testid="addItenararyLink" to="/additenarary">
          Start sharing
        </Link>
        <Link data-testid="" to="/signin">
          Sign in
        </Link>
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