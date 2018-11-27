import React from 'react'
import Pin from './Pin';

class Auth extends React.Component {
  render() {
    return (
      <div>
        {!this.props.p12decrypted && (
          <Pin onPinSubmit={this.props.onPinSubmit} />
        )}
      </div>
    )
  }
}

export default Auth
