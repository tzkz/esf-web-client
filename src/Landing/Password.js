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
  paddingBottom: '12px',
}

const subtitle = {
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '12px',
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
    if (!error.body.soapError) {
      return Alert.info('Unknown API Error')
    }
    if (error.body.soapError.faultcode === 'ns1:SecurityError') {
      return this.setState({ passwordError: true })
    }
    Alert.info(error.body.soapError.faultstring)
  }

  handleUnknownError = (error) => {
    if (error.response) {
      return Alert.info(`${error.response.status} ${error.response.statusText}`)
    }
    return Alert.info(`${error.name}: ${error.message}`)
  }

  setSessionId = ({ sessionId }) => {
    this.props.dispatch({ type: SET_SESSION_ID, sessionId })
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
    const { isDemo, p12decrypted } = this.props

    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={this.props.onCancel}
        isLoading={this.state.isLoading}
        show={this.props.show}
        className={css({ transitionDelay: '400ms' })}
      >
        <div className={css(formTitle)}>
          Account Password
        </div>
        <div className={css(subtitle)}>
          For {p12decrypted && extractIdFromKey(p12decrypted)}
        </div>
        <TextInput
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          helperText={isDemo ? 'Enter "TestPass123" for demo' : ''}
          errorMessage={this.state.passwordError ? 'Wrong Password' : ''}
          type="password"
          disabled={this.state.isLoading}
          autoFocus
        />
      </AuthStep>
    );
  }
}

Password.propTypes = {
  onCancel: PropTypes.func,
  p12decrypted: PropTypes.object,
  show: PropTypes.bool,
  isDemo: PropTypes.bool,
}

export default connect()(Password)
