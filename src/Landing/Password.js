import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'emotion'
import Alert from 'react-s-alert'

import TextInput from '../common/TextInput'
import AuthStep from './AuthStep'
import { extractIdFromKey, extractCert, toTrimmedPem } from '../crypt'
import { apiCall } from '../apiUtils';
import { SET_SESSION_ID, SET_USER, SET_PASSWORD } from '../store';

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Password extends React.Component {
  state = {
    password: '',
    passwordError: null,
    isLoading: false,
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, passwordError: false })
  }

  onSubmitError = (error) => {
    this.setState({ isLoading: false })
    if (error.name === 'ApiError') {
      return this.handleApiError(error)
    }
    return this.handleUnknownError(error)
  }

  handleApiError = (error) => {
    Alert.info(error.body.soapError.faultstring)
    if (error.body.soapError.faultcode === 'ns1:SecurityError') {
      this.setState({ passwordError: true })
    }
  }

  handleUnknownError = (error) => {
    if (error.response) {
      return Alert.info(`${error.response.status} ${error.response.statusText}`)
    }
    return Alert.info(`${error.name}: ${error.message}`)
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
    this.setState({ isLoading: true })

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
        isLoading={this.state.isLoading}
      >
        <div className={css(formTitle)}>
          Account ID {this.props.p12decrypted && extractIdFromKey(this.props.p12decrypted)}
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
          disabled={this.state.isLoading}
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
