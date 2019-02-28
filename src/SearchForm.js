import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { DateRangePicker } from 'react-dates'
import Media from 'react-media'
import moment from 'moment'
import { VERTICAL_ORIENTATION, HORIZONTAL_ORIENTATION } from 'react-dates/constants'

import Button from './common/Button'
import Radio from './common/Radio'

const formContainerInner = {
  width: '100%',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const inputRow = {
  display: 'flex',
  width: '100%',
  padding: '8px 12px 16px',
}

const checkboxRow = {
  padding: '8px 12px 16px',
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
    backgroundColor: '#697EFF',
    color: '#ffffff',
  },
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
    borderBottom: 'solid 1px #5668D1',
    borderRight: 'solid 1px #5668D1',
  },
}

const delivered = {
  borderRadius: '0px 5px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderLeft: 'solid 1px #fcfcfc',
}

const deliveredChecked = {
  ':checked + label': {
    borderBottom: 'solid 1px #5668D1',
    borderLeft: 'solid 1px #7689FF',
  },
}

const revoked = {
  borderRadius: '0px 0px 0px 5px',
  borderTop: 'solid 1px #fcfcfc',
  borderRight: 'solid 1px #f8f8f8',
}

const revokedChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #7689FF',
    borderRight: 'solid 1px #5668D1',
  },
}

const cancelled = {
  borderRadius: '0px 0px 5px 0px',
  borderTop: 'solid 1px #fcfcfc',
  borderLeft: 'solid 1px #fcfcfc',
}

const cancelledChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #7689FF',
    borderLeft: 'solid 1px #7689FF',
  },
}

const buttonRow = {
  padding: '25px 12px',
}

const directionOptions = [
  { id: 'foo', value: 'INBOUND', label: 'Inbound' },
  { id: 'bar', value: 'OUTBOUND', label: 'Outbound' },
]

const typeOptions = [
  { id: 'foo', value: 'any', label: 'Any' },
  { id: 'bar', value: 'ORDINARY_INVOICE', label: 'Ordinary' },
  { id: 'baz', value: 'FIXED_INVOICE', label: 'Corrected' },
  { id: 'zoo', value: 'ADDITIONAL_INVOICE', label: 'Additional' },
]

const typeRadioContainer = {
  fontSize: '13px',
}

class SearchForm extends React.Component {
  state = {
    form: {
      direction: 'INBOUND',
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      invoiceType: 'any',
      created: true,
      delivered: true,
      revoked: true,
      cancelled: true,
    },
    focusedInput: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        startDate,
        endDate,
      },
    }))
  }

  onDirectionChange = (event) => {
    const { value } = event.target

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        direction: value,
      },
    }))
  }

  onTypeChange = (event) => {
    const { value } = event.target

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        invoiceType: value,
      },
    }))
  }

  onStatusChange = (event) => {
    const { checked, name } = event.target

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: checked,
      },
    }))
  }

  onFocusChange = focusedInput => this.setState({ focusedInput })

  onSubmit = (event) => {
    const { form } = this.state
    const { onSubmit } = this.props

    event.preventDefault()
    onSubmit(form)
  }

  render() {
    const { form, focusedInput } = this.state

    return (
      <form className={css(formContainerInner)} onSubmit={this.onSubmit}>
        <div className={css(inputRow)}>
          <Media query="(min-width: 1024px)">
            {matches => (
              <DateRangePicker
                orientation={!matches
                  ? VERTICAL_ORIENTATION
                  : HORIZONTAL_ORIENTATION
                }
                withFullScreenPortal={!matches}
                startDate={form.startDate}
                startDateId="your_unique_start_date_id"
                endDate={form.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={this.onDatesChange}
                focusedInput={focusedInput}
                onFocusChange={this.onFocusChange}
                noBorder
                block
                isOutsideRange={() => false}
                readOnly
              />
            )}
          </Media>
        </div>
        <div className={css(inputRow)}>
          <Radio
            options={directionOptions}
            name="direction"
            selectedOption={form.direction}
            onOptionChange={this.onDirectionChange}
          />
        </div>
        <div className={css(checkboxRow)}>
          <div className={css(checkboxContainer1)}>
            <div className={css(checkboxItem)}>
              <input
                type="checkbox"
                id="created"
                name="created"
                className={css(checkboxInput, createdChecked)}
                onChange={this.onStatusChange}
                checked={form.created}
              />
              <label htmlFor="created" className={css(checkboxLabel, created)}>Created</label>
            </div>
            <div className={css(checkboxItem)}>
              <input
                type="checkbox"
                id="delivered"
                name="delivered"
                className={css(checkboxInput, deliveredChecked)}
                onChange={this.onStatusChange}
                checked={form.delivered}
              />
              <label htmlFor="delivered" className={css(checkboxLabel, delivered)}>Delivered</label>
            </div>
          </div>
          <div className={css(checkboxContainer2)}>
            <div className={css(checkboxItem)}>
              <input
                type="checkbox"
                id="revoked"
                name="revoked"
                className={css(checkboxInput, revokedChecked)}
                onChange={this.onStatusChange}
                checked={form.revoked}
              />
              <label htmlFor="revoked" className={css(checkboxLabel, revoked)}>Revoked</label>
            </div>
            <div className={css(checkboxItem)}>
              <input
                type="checkbox"
                id="cancelled"
                name="cancelled"
                className={css(checkboxInput, cancelledChecked)}
                onChange={this.onStatusChange}
                checked={form.cancelled}
              />
              <label htmlFor="cancelled" className={css(checkboxLabel, cancelled)}>Cancelled</label>
            </div>
          </div>
        </div>
        <div className={css(inputRow)}>
          <Radio
            options={typeOptions}
            name="type"
            className={css(typeRadioContainer)}
            selectedOption={form.invoiceType}
            onOptionChange={this.onTypeChange}
          />
        </div>
        <div className={css(buttonRow)}>
          <Button>
            Search
          </Button>
        </div>
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm
