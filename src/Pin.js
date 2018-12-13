import React from 'react';
import { css } from 'emotion';
import TextInput from './common/TextInput';
import AuthStep from './AuthStep';

const formTitle = {
  fontSize: '24px',
  color: 'rgb(0,0,0,0.87)',
  paddingBottom: '24px',
}

class Pin extends React.Component{
  state = {
    pin: '',
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.pin)
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
        onCancel={this.props.onCancel}
      >
        <div className={css(formTitle)}>
          Enter Certificate PIN
        </div>
        <TextInput
          label="PIN"
          placeholder="Pin"
          value={this.state.pin}
          onChange={this.onPinChange}
          helperText={'Enter "Qwerty12" for demo'}
          errorMessage={this.props.pinError && 'Wrong PIN. Enter "Qwerty12" for demo'}
          type="password"
        />
      </AuthStep>
    );
  }
}

export default Pin;
