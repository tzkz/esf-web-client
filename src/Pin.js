import React from 'react';
import { css } from 'emotion';
import SectionContent from './common/SectionContent';
import TextInput from './common/TextInput';
import AuthForm from './AuthForm';
import Tooltip from './Tooltip';

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

const innerContainer = {
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

const header = {
  fontFamily: 'Open Sans',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.38',
  letterSpacing: '1.2',
  textAlign: 'left',
  color: '#262626',
  marginBottom: '25px',
}

const pinInput = {
  width: '290px',
  height: '40px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  outline: 'none',
  border: 'solid 1px #707070cd',
  paddingLeft: '10px',
  marginTop: '25px',
}

const errorMessage = {
  color: 'red',
  fontSize: 12,
  padding: '0 12px',
}

const errorInput = {
  borderColor: 'red',
}


class Pin extends React.Component{
  state = {
    pin: '',
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onPinSubmit(this.state.pin)
  }

  onPinChange = (event) => {
    this.setState({ pin: event.target.value })
    if (this.props.onPinChange) {
      this.props.onPinChange(event)
    }
  }

  render() {
    return (
      <div className={css(container)}>
        <SectionContent className={css(sectionContent)}>
          <div className={css(closeButton)}>
            <button className={css(closeButtonInner)}>
              <svg className={css(closeButtonInner)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626"/>
              </svg>
            </button>
          </div>
          <div className={css(innerContainer)}>
            <AuthForm onSubmit={this.onSubmit}>
              <div className={css(header)}>
                Enter Certificate PIN
              </div>
              <TextInput
                className={css(pinInput, this.props.p12error && errorInput)}
                placeholder="Pin"
                value={this.state.pin}
                onChange={this.onPinChange}
              />
              {this.props.p12error &&
                <div className={css(errorMessage)}>
                  Wrong PIN
                </div>
              }
              <Tooltip>
                Enter "Qwerty12" for demo
              </Tooltip>
            </AuthForm>
          </div>
          </SectionContent>
      </div>
    );
  }
}

export default Pin;
