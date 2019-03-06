import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { FormattedMessage } from 'react-intl'

import TextInput from '../common/TextInput'
import AuthStep from './AuthStep'
import { decryptP12 } from '../crypt'

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

const container = {
  transition: 'all 300ms ease-out',
}

class Pin extends React.Component {
  state = {
    pin: '',
    pinError: null,
    opacity: 1,
  }

  textInput = React.createRef()

  componentDidMount() {
    setTimeout(() => {
      this.textInput.current.focus()
    }, 300)
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

      this.setState({ opacity: 0 })
      setTimeout(() => onDecrypt(p12decrypted), 300)
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
    const { pin, pinError, opacity } = this.state
    const { isDemo } = this.props

    return (
      <AuthStep
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
        className={css(container, { opacity })}
      >
        <div className={css(formTitle)}>
          <FormattedMessage
            id="Pin.Title"
            defaultMessage="Enter Certificate PIN"
          />
        </div>
        {/* The fake text input below is a workaround for Safari */}
        {/* https://blog.opendigerati.com/the-eccentric-ways-of-ios-safari-with-the-keyboard-b5aa3f34228d */}
        <input
          id="fakeInput"
          style={{
            height: '0px',
            outline: 'none',
            padding: 0,
            border: 'none',
            fontSize: 'inherit',
          }}
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        />
        <TextInput
          label={(
            <FormattedMessage
              id="Pin.PinInputLabel"
              defaultMessage="PIN"
            />
          )}
          placeholder="Pin"
          value={pin}
          onChange={this.onPinChange}
          helperText={isDemo
            ? (
              <FormattedMessage
                id="Pin.PinDemoHelper"
                defaultMessage={'Enter "Qwerty12" for demo'}
              />
            )
            : ''
          }
          errorMessage={pinError && (
            <FormattedMessage
              id="Pin.WrongPinError"
              defaultMessage="Wrong PIN"
            />
          )}
          type="password"
          ref={this.textInput}
        />
      </AuthStep>
    )
  }
}

Pin.propTypes = {
  onDecrypt: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  p12base64: PropTypes.string.isRequired,
  isDemo: PropTypes.bool.isRequired,
}

export default Pin
