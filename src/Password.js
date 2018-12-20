import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import TextInput from './common/TextInput'
import AuthStep from './AuthStep'

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Password extends React.Component {
  state = {
    password: '',
    passwordError: null,
    environment: 'test',
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onSubmit = (event) => {
    const { password, environment } = this.state;

    event.preventDefault()
    this.props.onSubmit({ password, environment })
  }

  render() {
    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={this.props.onCancel}
      >
        <div className={css(formTitle)}>
          Enter Account Password
        </div>
        <div className={css(formTitle)}>
          for ID 161141016493
        </div>
        <TextInput
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          helperText={'Enter "TestPass123" for demo'}
          errorMessage={this.state.passwordError && 'Wrong Password. Enter "TestPass123" for demo'}
          type="password"
        />
      </AuthStep>
    );
  }
}

Password.propTypes = {
  onCancel: PropTypes.func,
  p12decrypted: PropTypes.object,
}

export default Password
