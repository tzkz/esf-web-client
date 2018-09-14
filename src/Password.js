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
  width: '290px',
  height: '40px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #707070cd',
  paddingLeft: '10px',
  color: '#bbbbbb',
}

const Arrow = {
  transform: 'rotate(45deg)',
  marginTop: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '-5px',
  width: '10px',
  height: '10px',
  backgroundColor: 'rgba(97, 97, 97, 1)',
}

const demoEntry = {
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
  opacity: '1',
  color: '#ffffff',
  paddingTop: '5px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
}

const buttons = {
  width: '140px',
  height: '40px',
  borderRadius: '5px',
  lineHeight: '1.38',
  border: 'solid 1px #327dd0',
  color: '#327dd0',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: '#327dd0',
    color: '#ffffff',
  }
}

const Password = () => (
  <div className={css(container)}>
    <div className={css(innerContainer)}>
      <div className={css(header)}>
        Enter account password
        for ID 161141016493
      </div>
      <div>
        <input type="text" className={css(passwordInput)} placeholder="Password"/>
      </div>
      <div className={css(Arrow)}>
      </div>
      <div className={css(demoEntry)}>
        Enter "TestPass123" for demo
      </div>
      <div className={css(buttonsContainer)}>
        <Button className={css(buttons)}>
          Cancel
        </Button>
        <Button className={css(buttons)}>
          Continue
        </Button>
      </div>
    </div>
  </div>
);

export default Password;
