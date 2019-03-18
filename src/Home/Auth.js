import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Pin from './Pin'
import Password from './Password'

const container = {
  position: 'fixed',
  left: 0,
  right: 0,
  height: '100%',
  width: '100vw',
  transition: 'all 300ms ease-out',
  backgroundColor: '#FFFFFF',
}

class Auth extends React.Component {
  state = {
    p12decrypted: null,
    position: {
      top: '100%',
    },
  }

  componentDidMount() {
    const { p12base64 } = this.props

    if (p12base64) {
      this.setState({
        position: {
          bottom: 0,
          top: 0,
        },
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { p12base64 } = this.props

    if (!p12base64 && prevProps.p12base64) {
      this.setPosition({
        top: '100%',
      })
    }
    if (p12base64 && !prevProps.p12base64) {
      this.setPosition({
        top: 0,
      })
    }
  }

  setPosition = ({ top, bottom }) => {
    this.setState({
      position: {
        bottom,
        top,
      },
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
