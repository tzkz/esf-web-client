import React from 'react'
import { css } from 'emotion'

import SectionContent from './common/SectionContent'
import AuthForm from './AuthForm'

const container = {
  backgroundColor: '#ffffff',
  height: '100%',
}

const sectionContent = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const form = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignSelf: 'center',
  flexGrow: '1',
  width: '100%',
  maxWidth: '290px',
}

const header = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const footer = {
  height: '54px',
}

const closeButton = {
  padding: '20px 18px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}

const AuthStep = ({ children, onSubmit, onCancel }) => (
  <div className={css(container)}>
    <SectionContent className={css(sectionContent)}>
      <div className={css(header)}>
        <button className={css(closeButton)} onClick={onCancel}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14">
            <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626"/>
          </svg>
        </button>
      </div>
      <AuthForm
        className={css(form)}
        onSubmit={onSubmit}
        onCancel={onCancel}
      >
        {children}
      </AuthForm>
      <div className={css(footer)} />
    </SectionContent>
  </div>
)

export default AuthStep
