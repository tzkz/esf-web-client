import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, sessionId, ...other }) => (
  <Route
    {...other}
    render={props => (
      sessionId ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
)

const mapStateToProps = state => ({
  sessionId: state.sessionId,
})

PrivateRoute.propTypes = {
  sessionId: PropTypes.string.isRequired,
  component: PropTypes.node,
}

PrivateRoute.defaultProps = {
  component: '',
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
