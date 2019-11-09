import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

class ProtectedRoute extends React.Component {
  render() {
    const { component: Comp, ...props } = this.props;
      return (
      <Route {...props} render={({location}) => 
        auth.currentUser ? (
          <Comp {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: location}
          }} />
        )} />
      )
  }
}

export default ProtectedRoute;
