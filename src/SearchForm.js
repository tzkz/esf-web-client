import React from 'react'
import { css } from 'emotion'

import TextInput from './common/TextInput'
import Button from './common/Button'
import Radio from './common/Radio';

const formContainerInner = {
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const inputRow = {
  display: 'flex',
  padding: '5px 12px',
}

const dateInput = {
  flex: '0 1 50%',
}

const dateFrom = {
  marginRight: '3px',
}

const dateTo = {
  marginLeft: '3px',
}

const largeInput = {
  flex: '1',
}

const checkboxRow = {
  padding: '5px 12px',
}

const checkboxContainer1 = {
  display: 'flex',
  backgroundColor: '#ffffff',
  borderRadius: '5px 5px 0px 0px',
}

const checkboxContainer2 = {
  display: 'flex',
  backgroundColor: '#ffffff',
  borderRadius: '0px 0px 5px 5px',
}

const checkboxItem = {
  display: 'flex',
  flex: '1',
  height: '40px',
}

const checkboxInput = {
  display: 'none',
  ':checked + label': {
    backgroundColor: '#327dd0',
    color: '#ffffff',
  }
}

const checkboxLabel = {
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bbbbbb',
  ':hover': {
    cursor: 'pointer',
  },
}

const created = {
  borderRadius: '5px 0px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderRight: 'solid 1px #f8f8f8',
}

const createdChecked = {
  ':checked + label': {
    borderBottom: 'solid 1px #0767d0',
    borderRight: 'solid 1px #0767d0',
  }
}

const delivered = {
  borderRadius: '0px 5px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderLeft: 'solid 1px #fcfcfc',
}

const deliveredChecked = {
  ':checked + label': {
    borderBottom: 'solid 1px #0767d0',
    borderLeft: 'solid 1px #528dce',
  }
}

const revoked = {
  borderRadius: '0px 0px 0px 5px',
  borderTop: 'solid 1px #fcfcfc',
  borderRight: 'solid 1px #f8f8f8',
}

const revokedChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #528dce',
    borderRight: 'solid 1px #0767d0',
  }
}

const cancelled = {
  borderRadius: '0px 0px 5px 0px',
  borderTop: 'solid 1px #fcfcfc',
  borderLeft: 'solid 1px #fcfcfc',
}

const cancelledChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #528dce',
    borderLeft: 'solid 1px #528dce',
  }
}

const buttonRow = {
  padding: '25px 12px',
}

const button = {
  backgroundColor: '#327dd0',
  border: 'none',
  ':hover': {
    backgroundColor: '#327dd0',
  }
}

const directionOptions = [
  { id: 'foo', value: 'INBOUND', label: 'Inbound' },
  { id: 'bar', value: 'OUTBOUND', label: 'Outbound' },
]

const typeOptions = [
  { id: 'foo', value: 'any', label: 'Any' },
  { id: 'bar', value: 'ORDINARY', label: 'Ordinary' },
  { id: 'baz', value: 'FIXED', label: 'Corrected' },
  { id: 'zoo', value: 'ADDITIONAL', label: 'Additional' },
]

const typeRadioContainer = {
  fontSize: '13px',
}

class SearchForm extends React.Component {
  render() {
    return (
      <div className={css(formContainerInner)}>
        <div className={css(inputRow)}>
          <TextInput className={css(dateInput, dateFrom)} placeholder="Date from…" />
          <TextInput className={css(dateInput, dateTo)} placeholder="Date to…" />
        </div>
        <div className={css(inputRow)}>
          <TextInput className={css(largeInput)} placeholder="Reg number" />
        </div>
        <div className={css(inputRow)}>
         <Radio options={directionOptions} name="direction" />
        </div>
        <div className={css(inputRow)}>
          <TextInput className={css(largeInput)} placeholder="Customer/supplier BIN" />
        </div>
        <div className={css(checkboxRow)}>
          <div className={css(checkboxContainer1)}>
            <div className={css(checkboxItem)}>
              <input type="checkbox" id="created" className={css(checkboxInput, createdChecked)} />
              <label htmlFor="created" className={css(checkboxLabel, created)}>Created</label>
            </div>
            <div className={css(checkboxItem)}>
              <input type="checkbox" id="delivered" className={css(checkboxInput, deliveredChecked)} />
              <label htmlFor="delivered" className={css(checkboxLabel, delivered)}>Delivered</label>
            </div>
          </div>
          <div className={css(checkboxContainer2)}>
            <div className={css(checkboxItem)}>
              <input type="checkbox" id="revoked" className={css(checkboxInput, revokedChecked)} />
              <label htmlFor="revoked" className={css(checkboxLabel, revoked)}>Revoked</label>
            </div>
            <div className={css(checkboxItem)}>
              <input type="checkbox" id="cancelled" className={css(checkboxInput, cancelledChecked)} />
              <label htmlFor="cancelled" className={css(checkboxLabel, cancelled)}>Cancelled</label>
            </div>
          </div>
        </div>
        <div className={css(inputRow)}>
          <Radio options={typeOptions} name="type" className={css(typeRadioContainer)} />
        </div>
        <div className={css(buttonRow)}>
          <Button className={css(button)}>
            Search
          </Button>
        </div>
      </div>
    )
  }
}

export default SearchForm
