import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { DateRangePicker } from 'react-dates'
import Media from 'react-media'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
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

const checkboxInput = {
  display: 'none',
}

const checkboxLabel = {
  display: 'flex',
  flex: '1',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bbbbbb',
  ':hover': {
    cursor: 'pointer',
  },
}

const checkedLabel = {
  backgroundColor: '#697EFF',
  color: '#ffffff',
}

const created = {
  ...checkboxLabel,
  borderRadius: '5px 0px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderRight: 'solid 1px #f8f8f8',
}

const createdChecked = {
  ...checkedLabel,
  borderBottom: 'solid 1px #5668D1',
  borderRight: 'solid 1px #5668D1',
}

const delivered = {
  ...checkboxLabel,
  borderRadius: '0px 5px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderLeft: 'solid 1px #fcfcfc',
}

const deliveredChecked = {
  ...checkedLabel,
  borderBottom: 'solid 1px #5668D1',
  borderLeft: 'solid 1px #7689FF',
}

const revoked = {
  ...checkboxLabel,
  borderRadius: '0px 0px 0px 5px',
  borderTop: 'solid 1px #fcfcfc',
  borderRight: 'solid 1px #f8f8f8',
}

const revokedChecked = {
  ...checkedLabel,
  borderTop: 'solid 1px #7689FF',
  borderRight: 'solid 1px #5668D1',
}

const cancelled = {
  ...checkboxLabel,
  borderRadius: '0px 0px 5px 0px',
  borderTop: 'solid 1px #fcfcfc',
  borderLeft: 'solid 1px #fcfcfc',
}

const cancelledChecked = {
  ...checkedLabel,
  borderTop: 'solid 1px #7689FF',
  borderLeft: 'solid 1px #7689FF',
}

const buttonRow = {
  padding: '25px 12px',
}

const directionOptions = [
  {
    value: 'INBOUND',
    label: (
      <FormattedMessage
        id="SearchForm.DirectionInbound"
        defaultMessage="Inbound"
      />
    ),
  },
  {
    value: 'OUTBOUND',
    label: (
      <FormattedMessage
        id="SearchForm.DirectionOutbound"
        defaultMessage="Outbound"
      />
    ),
  },
]

const typeOptions = [
  {
    value: 'any',
    label: (
      <FormattedMessage
        id="SearchForm.TypeAny"
        defaultMessage="Any"
      />
    ),
  },
  {
    value: 'ORDINARY_INVOICE',
    label: (
      <FormattedMessage
        id="SearchForm.TypeOrdinary"
        defaultMessage="Ordinary"
      />
    ),
  },
  {
    value: 'FIXED_INVOICE',
    label: (
      <FormattedMessage
        id="SearchForm.TypeCorrected"
        defaultMessage="Corrected"
      />
    ),
  },
  {
    value: 'ADDITIONAL_INVOICE',
    label: (
      <FormattedMessage
        id="SearchForm.TypeAdditional"
        defaultMessage="Additional"
      />
    ),
  },
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
    const { locale } = this.props
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
                renderMonthElement={({ month }) => moment(month).locale(locale).format('MMMM YYYY')}
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
            <label
              htmlFor="created"
              className={css(created, form.created && createdChecked)}
            >
              <FormattedMessage
                id="SearchForm.StatusCreated"
                defaultMessage="Created"
              />
              <input
                type="checkbox"
                id="created"
                name="created"
                className={css(checkboxInput)}
                onChange={this.onStatusChange}
                checked={form.created}
              />
            </label>
            <label
              htmlFor="delivered"
              className={css(delivered, form.delivered && deliveredChecked)}
            >
              <FormattedMessage
                id="SearchForm.StatusDelivered"
                defaultMessage="Delivered"
              />
              <input
                type="checkbox"
                id="delivered"
                name="delivered"
                className={css(checkboxInput)}
                onChange={this.onStatusChange}
                checked={form.delivered}
              />
            </label>
          </div>
          <div className={css(checkboxContainer2)}>
            <label
              htmlFor="revoked"
              className={css(revoked, form.revoked && revokedChecked)}
            >
              <FormattedMessage
                id="SearchForm.StatusRevoked"
                defaultMessage="Revoked"
              />
              <input
                type="checkbox"
                id="revoked"
                name="revoked"
                className={css(checkboxInput)}
                onChange={this.onStatusChange}
                checked={form.revoked}
              />
            </label>
            <label
              htmlFor="cancelled"
              className={css(cancelled, form.cancelled && cancelledChecked)}
            >
              <FormattedMessage
                id="SearchForm.StatusCanceled"
                defaultMessage="Canceled"
              />
              <input
                type="checkbox"
                id="cancelled"
                name="cancelled"
                className={css(checkboxInput)}
                onChange={this.onStatusChange}
                checked={form.cancelled}
              />
            </label>
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
            <FormattedMessage
              id="SearchForm.SearchButton"
              defaultMessage="Search"
            />
          </Button>
        </div>
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

SearchForm.defaultProps = {
  locale: 'en-US',
}

const mapStateToProps = (state) => ({
  locale: state.locale,
})

export default connect(mapStateToProps)(SearchForm)
