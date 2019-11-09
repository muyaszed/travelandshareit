import React from 'react';

import { navigate } from '@reach/router';

class Redirect extends React.Component {
  componentDidMount() {
    const { redirect } = this.props;
    console.log("redirect comp", redirect)
    navigate(redirect);
  }

  render() {
    return (
      <div>
        This is a redirect
      </div>
    )
  }
}

export default Redirect;