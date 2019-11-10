import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import styles from './homePage.module.scss';

class HomePage extends React.Component {
  render() {
    
    return (
      <div>
        <div className={styles.bannerContent}>
					<p>Share your exciting adventure, so others can have the same</p>
					<h2>Travel & Share</h2>
				</div>
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