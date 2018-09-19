import React from 'react';
import { css } from 'emotion';
import Button from './common/Button';
import SectionContent from './common/SectionContent';

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

const toolTipArrow = {
  display: 'flex',
  justifyContent: 'center',
}

const Arrow = {
  width: '0', 
  height: '0', 
  borderLeft: '5px solid transparent',
  borderRight: '5px solid transparent',
  borderBottom: '5px solid rgba(97, 97, 97, 0.9)',
}

const toolTip = {
  display: 'flex',
  justifyContent: 'center',
}

const toolTipInner = {
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.3',
  width: '206px',
  height: '29px',
  borderRadius: '2px',
  letterSpacing: 'normal',
  textAlign: 'center',
  backgroundColor: 'rgba(97, 97, 97, 0.9)',
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
    <SectionContent>
      <button className={css(closeButton)}>
        <svg className={css(closeButton)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626"/>
        </svg>
      </button>
      <div className={css(innerContainer)}>
        <div className={css(header)}>
          Enter account password
          for ID 161141016493
        </div>
        <div>
          <input type="text" className={css(passwordInput)} placeholder="Password"/>
        </div>
        <div className={css(toolTipArrow)}>
          <div className={css(Arrow)}>
          </div>
        </div>
        <div className={css(toolTip)}>
          <div className={css(toolTipInner)}>
            Enter "TestPass123" for demo
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
    </SectionContent>
  </div>
);

export default Password;
