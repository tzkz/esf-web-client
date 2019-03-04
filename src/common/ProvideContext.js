import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import ProvideIntl from './ProvideIntl'

import store from '../store'

const ProvideContext = ({ children }) => (
  <Provider store={store}>
    <ProvideIntl>
      {children}
    </ProvideIntl>
  </Provider>
)

ProvideContext.propTypes = {
  children: PropTypes.node,
}

ProvideContext.defaultProps = {
  children: null,
}

export default ProvideContext
