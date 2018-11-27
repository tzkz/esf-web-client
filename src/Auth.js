import React from 'react'
import Pin from './Pin';

class Auth extends React.Component {
  render() {
    return (
      <div>
        {!this.props.p12decrypted && (
          <Pin
            onPinSubmit={this.props.onPinSubmit}
            onPinChange={this.props.onPinChange}
            p12error={this.props.p12error}
          />
        )}
      </div>
    )
  }
}

export default Auth
