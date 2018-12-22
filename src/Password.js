import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'emotion'

import TextInput from './common/TextInput'
import AuthStep from './AuthStep'
import { extractIdFromKey, extractCert, toTrimmedPem } from './crypt'
import { apiCall } from './apiUtils';
import { SET_SESSION_ID, SET_USER, SET_PASSWORD } from './store';

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Password extends React.Component {
  state = {
    password: '',
    passwordError: null,
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, passwordError: false })
  }

  onSubmitError = (error) => {
    if (error.name === 'ApiError') {
      return error.response.json()
        .then((json) => {
          if (json.error.faultcode === 'ns1:SecurityError') {
            this.setState({ passwordError: true })
          }
        })
    }
  }

  setSessionId = ({ sessionId }) => {
    this.props.dispatch({ type: SET_SESSION_ID,  sessionId })
    return { sessionId }
  }

  fetchUser = ({ sessionId }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: extractIdFromKey(this.props.p12decrypted),
        password: this.state.password,
        sessionId,
      }),
    }

    return apiCall('/sessions/currentuser', options)
  }

  setUser = ({ user }) => {
    this.props.dispatch({ type: SET_USER, user })
    this.props.dispatch({ type: SET_PASSWORD, password: this.state.password })
  }

  onSubmit = (event) => {
    const { password } = this.state;
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: extractIdFromKey(this.props.p12decrypted),
        password,
        x509Certificate: toTrimmedPem(extractCert(this.props.p12decrypted)),
      })
    }

    event.preventDefault()

    return apiCall('/sessions/createsession', options)
      .then(this.setSessionId)
      .then(this.fetchUser)
      .then(this.setUser)
      .catch(this.onSubmitError)
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
          for ID {this.props.p12decrypted && extractIdFromKey(this.props.p12decrypted)}
        </div>
        <TextInput
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          helperText={'Enter "TestPass123" for demo'}
          errorMessage={this.state.passwordError ? 'Wrong Password. Enter "TestPass123" for demo' : ''}
          type="password"
          autoFocus
        />
      </AuthStep>
    );
  }
}

Password.propTypes = {
  onCancel: PropTypes.func,
  p12decrypted: PropTypes.object,
}

export default connect()(Password)
