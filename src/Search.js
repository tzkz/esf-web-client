import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import SectionContent from './common/SectionContent'
import PrivateComponent from './common/PrivateComponent'
import SearchForm from './SearchForm'

export const createQueryString = ({
  direction, startDate, endDate, created, delivered, revoked, cancelled, invoiceType,
}) => (
  `?
    ${direction ? `direction=${direction}` : ''}
    ${startDate ? `&dateFrom=${startDate.format('YYYY-MM-DD')}` : ''}
    ${endDate ? `&dateTo=${endDate.format('YYYY-MM-DD')}` : ''}
    ${created ? '&statuses[]=CREATED' : ''}
    ${delivered ? '&statuses[]=DELIVERED' : ''}
    ${revoked ? '&statuses[]=REVOKED' : ''}
    ${cancelled ? '&statuses[]=CANCELED' : ''}
    ${invoiceType && invoiceType !== 'any' ? `&invoiceType=${invoiceType}` : ''}
  `.replace(/\s/g, '')
)

const innerContainer = {
  display: 'flex',
  paddingTop: '16px',
  paddingBottom: '16px',
}

const mainArea = {
  backgroundColor: '#f8f8f8',
  flexGrow: '1',
  borderRadius: '5px',
  paddingTop: '15px',
}

const Search = ({ history }) => {
  const onSubmit = (form) => {
    history.push(`/result${createQueryString(form)}`)
  }

  return (
    <PrivateComponent>
      <div>
        <SectionContent>
          <div className={css(innerContainer)}>
            <div className={css(mainArea)}>
              <SearchForm onSubmit={onSubmit} />
            </div>
          </div>
        </SectionContent>
      </div>
    </PrivateComponent>
  )
}

Search.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
}

export default Search
