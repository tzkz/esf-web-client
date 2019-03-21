import React from 'react'
import PropTypes from 'prop-types'
import { addLocaleData, IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import en from 'react-intl/locale-data/en'
import kk from 'react-intl/locale-data/kk'
import ru from 'react-intl/locale-data/ru'

import localeData from '../i18n/locales'

if (!window.Intl) {
  import('intl')
}

addLocaleData([...en, ...kk, ...ru])

const ProvideIntl = ({ children, locale }) => (
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

ProvideIntl.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
}

ProvideIntl.defaultProps = {
  children: null,
  locale: 'en-US',
}

const mapStateToProps = state => ({
  locale: state.locale,
})

export default connect(mapStateToProps)(ProvideIntl)
