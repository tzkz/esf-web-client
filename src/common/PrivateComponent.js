import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateComponent = ({ sessionId, children }) => (
  sessionId ? children : <Redirect to="/" />
)

const mapStateToProps = state => ({
  sessionId: state.sessionId,
})

PrivateComponent.propTypes = {
  sessionId: PropTypes.string.isRequired,
  children: PropTypes.node,
}

PrivateComponent.defaultProps = {
  children: null,
}

export default connect(mapStateToProps)(PrivateComponent)
