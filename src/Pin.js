import React from 'react';
import { css } from 'emotion';

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
  textAlign: 'left',
  color: '#262626',
  paddingTop: '160px',
}

const demoEntry = {
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.38',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#262626',
  paddingTop: '40px',
  paddingBottom: '15px',
}

const pinInput = {
  width: '290px',
  height: '40px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #f41111',
  paddingLeft: '10px',
}

const requiredField = {
  width: '39px',
  height: '13px',
  fontFamily: 'Open Sans',
  fontSize: '9px',
  fontWeight: '600',
  textAlign: 'left',
  color: '#f41111',
  paddingTop: '3px',
}

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '15px',
}

const buttons = {
  width: '140px',
  height: '40px',
  borderRadius: '5px',
  border: 'solid 1px #327dd0',
  color: '#327dd0',
  backgroundColor: 'transparent',
}

const buttonsActive = {
  color: '#ffffff',
  backgroundColor: '#327dd0'
}

const Pin = () => (
  <div className={css(container)}>
    <div className={css(innerContainer)}>
      <div className={css(header)}>
        Enter Certificate Pin
      </div>
      <div className={css(demoEntry)}>
        Enter "Qwerty12" for demo:
      </div>
      <div>
        <input type="text" className={css(pinInput)} placeholder="Pin"/>
      </div>
      <div className={css(requiredField)}>
        Required
      </div>
      <div className={css(buttonsContainer)}>
        <button className={css(buttons)}>
          Cancel
        </button>
        <button className={css(buttons, buttonsActive)}>
          Continue
        </button>
      </div>
    </div>
  </div>
);

export default Pin;
