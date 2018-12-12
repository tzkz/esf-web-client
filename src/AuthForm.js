import React from 'react'
import { css } from 'emotion'

import Button from './common/Button'

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '30px',
  flexShrink: '0',
}

const buttons = {
  width: '48%',
  height: '50px',
  lineHeight: '1.38',
  border: 'solid 1px #697eff',
  color: '#697eff',
  backgroundColor: '#ffffff',
  ':hover': {
    backgroundColor: '#F1F3FF',
  }
}

const buttonsChecked = {
  backgroundColor: '#697eff',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#6073E8',
    border: 'solid 1px #6073E8',
  }
}

const AuthForm = ({ children, onCancel, ...other }) => (
  <form {...other}>
    {children}
    <div className={css(buttonContainer)}>
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
