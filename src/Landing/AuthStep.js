import React from 'react'
import { css } from 'emotion'

import AuthForm from './AuthForm'

const container = {
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  bottom: 0,
  transition: 'all 400ms ease-out',
}

const form = {
  alignSelf: 'center',
  width: '100%',
  maxWidth: '414px',
  padding: '24px',
}

const header = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const footer = {
  height: '54px',
}

const closeButton = {
  padding: '24px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14">
    <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626" />
  </svg>
)

class AuthStep extends React.Component {
  state = {
    position: {
      left: '100vw',
      right: '-100vw',
    }
  }

  componentDidMount() {
    if (this.props.show) {
      this.setState({ position: {
        left: 0,
        right: 0,
      }})
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.show && !prevProps.show) {
      this.setState({ position: {
        left: 0,
        right: 0,
      }})
    }
    if (!this.props.show && prevProps.show) {
      this.setState({ position: {
        left: '-100vw',
        right: '100vw',
      }})
    }
  }

  render() {
    const { children, onSubmit, onCancel, isLoading, className } = this.props

    return (
      <div className={css(container, className, this.state.position)}>
        <div className={css(header)}>
          <button className={css(closeButton)} onClick={onCancel}>
            {closeIcon}
          </button>
        </div>
        <AuthForm
          className={css(form)}
          onSubmit={onSubmit}
          onCancel={onCancel}
          isLoading={isLoading}
        >
          {children}
        </AuthForm>
        <div className={css(footer)} />
      </div>
    )
  }
}

export default AuthStep
