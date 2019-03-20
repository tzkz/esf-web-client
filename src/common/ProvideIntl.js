import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addLocaleData, IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import moment from 'moment'

import en from 'react-intl/locale-data/en'
import kk from 'react-intl/locale-data/kk'
import ru from 'react-intl/locale-data/ru'
import 'moment/locale/kk'
import 'moment/locale/ru'

import localeData from '../i18n/locales'

if (!window.Intl) {
  import('intl')
}

addLocaleData([...en, ...kk, ...ru])

moment.locale('en')

const ProvideIntl = ({ children, locale }) => {
  useEffect(() => {
    moment.locale(locale)
  }, [locale])

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
