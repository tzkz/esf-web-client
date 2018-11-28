import React from 'react'
import { css } from 'emotion'

import SectionContent from './common/SectionContent'
import AuthForm from './AuthForm'

const container = {
  backgroundColor: '#ffffff',
  margin: 'auto 16px',
  height: '100%',
}

const sectionContent = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const form = {
  display: 'flex',
  maxWidth: '290px',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 'auto',
}

const closeButton = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const closeButtonInner = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  margin: '13px 13px 0px 0px',
  width: '14px',
  cursor: 'pointer',
}

const AuthStep = ({ children, onSubmit, onCancel }) => (
  <div className={css(container)}>
    <SectionContent className={css(sectionContent)}>
      <div className={css(closeButton)}>
        <button className={css(closeButtonInner)} onClick={onCancel}>
          <svg className={css(closeButtonInner)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
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
    </SectionContent>
  </div>
)

export default AuthStep
