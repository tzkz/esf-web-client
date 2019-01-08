import React from 'react'
import { css } from 'emotion'

import Button from '../common/Button'
import Spinner from '../common/Spinner';

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '30px',
  flexShrink: '0',
}

const button = {
  width: '48%',
}

const cancelButton = {
  color: '#697eff',
  backgroundColor: '#ffffff',
  ':hover': {
    backgroundColor: '#F1F3FF',
  },
}

const AuthForm = ({ children, onCancel, isLoading, ...other }) => (
  <form {...other}>
    {children}
    <div className={css(buttonContainer)}>
      <Button className={css(button, cancelButton)} type="button" onClick={onCancel}>
        Cancel
      </Button>
      <Button className={css(button)} type="submit">
        {isLoading ? <Spinner size={12} /> : <span>Continue</span>}
      </Button>
    </div>
  </form>
)

export default AuthForm
