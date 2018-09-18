import React from 'react';
import { css } from 'emotion';
import Button from './common/Button';

const container = {
  backgroundColor: '#ffffff',
  margin: 'auto 16px',
  minHeight: '568px',
}

const innerContainer = {
  maxWidth: '290px',
  margin: 'auto',
}

const closeButton = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  float: 'right',
  marginTop: '20px',
  width: '14px',
}

const header = {
  fontFamily: 'Open Sans',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.38',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#262626',
  paddingTop: '160px',
  paddingBottom: '50px',
}

const passwordInput = {
  outline: 'none',
  width: '290px',
  height: '40px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #707070cd',
  paddingLeft: '10px',
  marginBottom: '15px',
}

const toolTipContainer = {
  display: 'flex',
  justifyContent: 'center',
}

const Arrow = {
  position: 'absolute',
  transform: 'rotate(45deg)',
  width: '23px',
  height: '23px',
  backgroundColor: 'rgba(97, 97, 97, 1)',
}

const demoEntry = {
  position: 'relative',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.3',
  width: '206px',
  height: '29px',
  borderRadius: '2px',
  letterSpacing: 'normal',
  textAlign: 'center',
  backgroundColor: 'rgba(97, 97, 97, 1)',
  color: '#ffffff',
  paddingTop: '5px',
}

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
}

const buttons = {
  width: '138px',
  height: '40px',
  borderRadius: '5px',
  lineHeight: '1.38',
  border: 'solid 1px #327dd0',
  color: '#327dd0',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: 'transparent',
  }
}

const buttonsChecked = {
  backgroundColor: '#327dd0',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#327dd0',
  }
}

const Password = () => (
  <div className={css(container)}>
    <div className={css(innerContainer)}>
      <button className={css(closeButton)}>
        <svg className={css(closeButton)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626"/>
        </svg>
      </button>
      <div className={css(header)}>
        Enter account password
        for ID 161141016493
      </div>
      <div>
        <input type="text" className={css(passwordInput)} placeholder="Password"/>
      </div>
      <div className={css(toolTipContainer)}>
        <div className={css(Arrow)}>
        </div>
        <div className={css(demoEntry)}>
          Enter "Qwerty12" for demo
        </div>
      </div>
      <div className={css(buttonsContainer)}>
        <Button className={css(buttons)}>
          Cancel
        </Button>
        <Button className={css(buttons, buttonsChecked)}>
          Continue
        </Button>
      </div>
    </div>
  </div>
);

export default Password;
