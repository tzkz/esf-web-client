import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateComponent = ({ sessionId, children }) => (
  sessionId ? children : <Redirect to="/" />
)

const mapStateToProps = (state) => ({
  sessionId: state.sessionId,
})

export default connect(mapStateToProps)(PrivateComponent)
