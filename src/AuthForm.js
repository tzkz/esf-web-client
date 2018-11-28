import React from 'react'
import { css } from 'emotion'

import Button from './common/Button'

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
}

const buttons = {
  width: '138px',
  height: '40px',
  lineHeight: '1.38',
  border: 'solid 1px #327dd0',
  color: '#327dd0',
  backgroundColor: '#ffffff',
  ':hover': {
    backgroundColor: '#ebf2fa',
  }
}

const buttonsChecked = {
  backgroundColor: '#327dd0',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#60A3EE',
    border: 'solid 1px #60A3EE',
  }
}

const AuthForm = ({ children, onCancel, ...other }) => (
  <form {...other}>
    {children}
    <div className={css(buttonsContainer)}>
      <Button className={css(buttons)} type="button" onClick={onCancel}>
        Cancel
      </Button>
      <Button className={css(buttons, buttonsChecked)} type="submit">
        Continue
      </Button>
    </div>
  </form>
)

export default AuthForm
