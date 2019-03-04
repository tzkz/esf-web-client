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
    return Alert.info(error.body.soapError.faultstring)
  }

  handleUnknownError = (error) => {
    if (error.response) {
      return Alert.info(`${error.response.status} ${error.response.statusText}`)
    }
    return Alert.info(`${error.name}: ${error.message}`)
  }

  setSessionId = ({ sessionId }) => {
    const { dispatch } = this.props

    dispatch({ type: SET_SESSION_ID, sessionId })

    return { sessionId }
  }

  fetchUser = ({ sessionId }) => {
    const { p12decrypted } = this.props
    const { password } = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: extractIdFromKey(p12decrypted),
        password,
        sessionId,
      }),
    }

    return apiCall('/sessions/currentuser', options)
  }

  setUser = ({ user }) => {
    const { dispatch } = this.props
    const { password } = this.state

    dispatch({ type: SET_USER, user })
    dispatch({ type: SET_PASSWORD, password })
  }

  onSubmit = (event) => {
    const { password } = this.state
    const { p12decrypted } = this.props

    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: extractIdFromKey(p12decrypted),
        password,
        x509Certificate: toTrimmedPem(extractCert(p12decrypted)),
      }),
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
    const { isLoading, password, passwordError } = this.state
    const {
      isDemo, p12decrypted, onCancel,
    } = this.props

    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={onCancel}
        isLoading={isLoading}
        className={css({ transitionDelay: '400ms' })}
      >
        <div className={css(formTitle)}>
          Account Password
        </div>
        <div className={css(subtitle)}>
          For
          {' '}
          {p12decrypted && extractIdFromKey(p12decrypted)}
        </div>
        <TextInput
          label="Password"
          placeholder="Password"
          value={password}
          onChange={this.onPasswordChange}
          helperText={isDemo ? 'Enter "TestPass123" for demo' : ''}
          errorMessage={passwordError ? 'Wrong Password' : ''}
          type="password"
          disabled={isLoading}
          autoFocus
        />
      </AuthStep>
    );
  }
}

Password.propTypes = {
  onCancel: PropTypes.func.isRequired,
  p12decrypted: PropTypes.shape({
    getBags: PropTypes.func,
  }),
  isDemo: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

Password.defaultProps = {
  p12decrypted: null,
}

export default connect()(Password)
