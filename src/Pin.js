import React from 'react';
import PropTypes from 'prop-types'
import { css } from 'emotion';

import TextInput from './common/TextInput';
import AuthStep from './AuthStep';
import { decryptP12 } from './crypt'

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Pin extends React.Component{
  state = {
    pin: '',
    pinError: null,
  }

  onPinChange = (event) => {
    this.setState({ pin: event.target.value, pinError: null })
  }

  onSubmit = (event) => {
    event.preventDefault()
    try {
      const p12decrypted = decryptP12(this.props.p12base64, this.state.pin)
      this.props.onDecrypt(p12decrypted)
    } catch (error) {
      this.setState({ pinError: error })
    }
  }

  render() {
    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={this.props.onCancel}
      >
        <div className={css(formTitle)}>
          Enter Certificate PIN
        </div>
        <TextInput
          label="PIN"
          placeholder="Pin"
          value={this.state.pin}
          onChange={this.onPinChange}
          helperText={'Enter "Qwerty12" for demo'}
          errorMessage={this.state.pinError && 'Wrong PIN. Enter "Qwerty12" for demo'}
          type="password"
          autoFocus
        />
      </AuthStep>
    );
  }
}

Pin.propTypes = {
  onDecrypt: PropTypes.func,
  onCancel: PropTypes.func,
  p12base64: PropTypes.string,
}

export default Pin;
