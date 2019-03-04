import React from 'react';
import PropTypes from 'prop-types'
import { css } from 'emotion';

import TextInput from '../common/TextInput';
import AuthStep from './AuthStep';
import { decryptP12 } from '../crypt'

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Pin extends React.Component {
  state = {
    pin: '',
    pinError: null,
  }

  onPinChange = (event) => {
    this.setState({ pin: event.target.value, pinError: null })
  }

  onSubmit = (event) => {
    const { pin } = this.state
    const { p12base64, onDecrypt } = this.props

    event.preventDefault()

    try {
      const p12decrypted = decryptP12(p12base64, pin)
      onDecrypt(p12decrypted)
    } catch (error) {
      this.setState({ pinError: error })
    }
  }

  onCancel = (event) => {
    const { onCancel } = this.props

    this.setState({ pin: '', pinError: null })
    if (onCancel) {
      onCancel(event)
    }
  }

  render() {
    const { pin, pinError } = this.state
    const { isDemo } = this.props

    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
      >
        <div className={css(formTitle)}>
          Enter Certificate PIN
        </div>
        <TextInput
          label="PIN"
          placeholder="Pin"
          value={pin}
          onChange={this.onPinChange}
          helperText={isDemo ? 'Enter "Qwerty12" for demo' : ''}
          errorMessage={pinError && 'Wrong PIN'}
          type="password"
          autoFocus
        />
      </AuthStep>
    );
  }
}

Pin.propTypes = {
  onDecrypt: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  p12base64: PropTypes.string.isRequired,
  isDemo: PropTypes.bool.isRequired,
}

export default Pin;
