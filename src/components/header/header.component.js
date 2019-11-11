import React from 'react';
import { withRouter } from "react-router";
import { auth } from '../../firebase/firebase.utils';
import styles from './header.module.scss'

import PrimaryBtn from '../primary-btn/primary-btn.component';


const renderSignOutBtnandItenararyLink = currentUser => (
      currentUser ?
      <div className={styles.menu}>
        <div className={styles.menuItem} data-testid="itenararyLink">
          EXPLORE
        </div> 
        <div className={styles.menuItem} data-testid="signoutBtn" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      </div> :
      null
)

const selectBgColor = color => {
  switch(color) {
    case 'black':
      return styles.headerBlack;
    default:
      return styles.header;
  }
}


const Header = ({ currentUser, bgColor, history }) => {
  
  return (
    <div className={selectBgColor(bgColor)}>
      <div className={styles.headerContainer}>
        <div className={styles.logo} onClick={() => history.push('/')}>
          TRAVELDivvy
        </div>
        <div className={styles.navbar}>
            { renderSignOutBtnandItenararyLink(currentUser) }
        </div>
        <div className={styles.itenararyLink}>
          <PrimaryBtn testid="addItenararyLink" title="START SHARING" to="/additenarary" type="Link"/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header);