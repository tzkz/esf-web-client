import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Pin from './Pin'
import Password from './Password';

const container = {
  position: 'fixed',
  left: 0,
  right: 0,
  transition: 'all 400ms ease-out',
}

class Auth extends React.Component {
  state = {
    p12decrypted: null,
    position: {
      bottom: '-100vh',
      top: '100vh',
    },
  }

  componentDidMount() {
    if (this.props.show) {
      this.setState({ position: {
        bottom: 0,
        top: 0,
      }})
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.show && prevProps.show) {
      this.setState({ position: {
        bottom: '-100vh',
        top: '100vh',
      }})
    }
    if (this.props.show && !prevProps.show) {
      this.setState({ position: {
        bottom: 0,
        top: 0,
      }})
    }
  }

  onDecrypt = (p12decrypted) => this.setState({ p12decrypted })

  onCancel = (event) => {
    this.setState({ p12decrypted: null })
    if(this.props.onCancel) {
      this.props.onCancel(event)
    }
  }

  render() {
    return (
      <div className={css(container, this.state.position )}>
        <Pin
          onDecrypt={this.onDecrypt}
          onCancel={this.onCancel}
          p12base64={this.props.p12base64}
          show={!this.state.p12decrypted}
        />
        <Password
          onCancel={this.onCancel}
          p12decrypted={this.state.p12decrypted}
          show={!!this.state.p12decrypted}
        />
      </div>
    )
  }
}

Auth.propTypes = {
  p12base64: PropTypes.string,
  onCancel: PropTypes.func,
  show: PropTypes.bool,
}

export default Auth
