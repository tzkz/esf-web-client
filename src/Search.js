import React from 'react'
import { css } from 'emotion'

import Header from './common/Header'
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
    ${created ? `&statuses[]=CREATED` : ''}
    ${delivered ? `&statuses[]=DELIVERED` : ''}
    ${revoked ? `&statuses[]=REVOKED` : ''}
    ${cancelled ? `&statuses[]=CANCELED` : ''}
    ${invoiceType && invoiceType !== 'any' ? `&invoiceType=${invoiceType}` : ''}
  `.replace(/\s/g, '')
)

const container = {
}

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

const Search = ({ onMenuClick, history }) => {
  const onSubmit = (form) => {
    history.push(`/result${createQueryString(form)}`)
  }

  return (
    <PrivateComponent>
      <div className={css(container)}>
        <Header
          burgerClassName={css({ fill: '#697EFF' })}
          onMenuClick={onMenuClick}
        />
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

export default Search
