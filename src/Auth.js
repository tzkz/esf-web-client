import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { decryptP12 } from './crypt'

import Pin from './Pin'

const container = {
  height: '100%',
}

class Auth extends React.Component {
  state = {
    p12decrypted: null,
    pinError: null,
  }

  onPinChange = () => this.setState({ pinError: null })

  onPinSubmit = (pin) => {
    try {
      const p12decrypted = decryptP12(this.props.p12base64, pin)
      this.setState({ p12decrypted })
    } catch (error) {
      this.setState({ pinError: error })
    }
  }

  render() {
    return (
      <div className={css(container)}>
        {!this.state.p12decrypted && (
          <Pin
            onSubmit={this.onPinSubmit}
            onCancel={this.props.onCancel}
            onPinChange={this.onPinChange}
            pinError={this.state.pinError}
          />
        )}
      </div>
    )
  }
}

Auth.propTypes = {
  p12base64: PropTypes.string,
  onCancel: PropTypes.func,
}

export default Auth
