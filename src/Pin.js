import React from 'react';
import { css } from 'emotion';
import TextInput from './common/TextInput';
import Tooltip from './Tooltip';
import AuthStep from './AuthStep';

const formTitle = {
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
      <AuthStep
        onSubmit={this.onSubmit}
      >
        <div className={css(formTitle)}>
          Enter Certificate PIN
        </div>
        <TextInput
          className={css(pinInput)}
          placeholder="Pin"
          value={this.state.pin}
          onChange={this.onPinChange}
          errorMessage={this.props.p12error && 'Wrong PIN'}
        />
        <Tooltip>
          Enter "Qwerty12" for demo
        </Tooltip>
      </AuthStep>
    );
  }
}

export default Pin;
