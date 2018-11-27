import React from 'react'
import Pin from './Pin';
import { css } from 'emotion';

const container = {
  height: '100%',
}

class Auth extends React.Component {
  render() {
    return (
      <div className={css(container)}>
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
