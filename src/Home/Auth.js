import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Pin from './Pin'
import Password from './Password'

const container = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: '100%',
  height: '100%',
  width: '100vw',
  transition: 'transform 300ms ease-out',
  backgroundColor: '#FFFFFF',
}

class Auth extends React.Component {
  state = {
    p12decrypted: null,
    position: {},
  }

  componentDidMount() {
    const { p12base64 } = this.props

    if (p12base64) {
      this.slideUp()
    }
  }

  componentDidUpdate(prevProps) {
    const { p12base64 } = this.props

    if (!p12base64 && prevProps.p12base64) {
      this.slideDown()
    }
    if (p12base64 && !prevProps.p12base64) {
      this.slideUp()
    }
  }

  slideUp = () => {
    this.setState({
      position: {
        transform: 'translateY(-100%)',
      }
    })
  }

  slideDown = () => {
    this.setState({
      position: {
        transform: 'none',
      }
    })
  }

  onDecrypt = p12decrypted => this.setState({ p12decrypted })

  onCancel = (event) => {
    const { onCancel } = this.props

    this.setState({ p12decrypted: null })
    if (onCancel) {
      onCancel(event)
    }
  }

  render() {
    const { p12decrypted, position } = this.state
    const { p12base64, isDemo } = this.props

    return (
      <div className={css(container, position)}>
        {p12base64 && !p12decrypted
          && (
          <Pin
            onDecrypt={this.onDecrypt}
            onCancel={this.onCancel}
            p12base64={p12base64}
            isDemo={isDemo}
          />
          )
        }
        {!!p12decrypted
          && (
          <Password
            onCancel={this.onCancel}
            p12decrypted={p12decrypted}
            isDemo={isDemo}
          />
          )
        }
      </div>
    )
  }
}

Auth.propTypes = {
  p12base64: PropTypes.string,
  onCancel: PropTypes.func,
  isDemo: PropTypes.bool,
}

Auth.defaultProps = {
  p12base64: '',
  onCancel: () => {},
  isDemo: true,
}

export default Auth
