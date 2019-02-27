import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import en from 'react-intl/locale-data/en'
import kk from 'react-intl/locale-data/kk'
import ru from 'react-intl/locale-data/ru'

import localeData from '../i18n/locales'

if (!window.Intl) {
  require('intl')
}

addLocaleData([...en, ...kk, ...ru])

const ProvideIntl = ({ children, locale }) => {
  return (
    <IntlProvider
      locale={locale}
      messages={{
        ...localeData.en,
        ...localeData[locale],
      }}
    >
      {children}
    </IntlProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  }
}

export default connect(mapStateToProps)(ProvideIntl)
