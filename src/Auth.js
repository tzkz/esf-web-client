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
    p12error: null,
  }

  onPinChange = () => this.setState({ p12error: null })

  onPinSubmit = (pin) => {
    try {
      const p12decrypted = decryptP12(this.props.p12b64, pin)
      this.setState({ p12decrypted })
    } catch (error) {
      this.setState({ p12error: error })
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
            p12error={this.state.p12error}
          />
        )}
      </div>
    )
  }
}

Auth.propTypes = {
  p12b64: PropTypes.string,
  onCancel: PropTypes.func,
}

export default Auth
