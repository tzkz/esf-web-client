import React from 'react'
import { css } from 'emotion'

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '15px',
}

const arrow = {
  width: '0', 
  height: '0', 
  borderLeft: '5px solid transparent',
  borderRight: '5px solid transparent',
  borderBottom: '5px solid rgba(97, 97, 97, 0.9)',
}

const tooltipBody = {
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.3',
  height: '29px',
  borderRadius: '2px',
  letterSpacing: 'normal',
  textAlign: 'center',
  backgroundColor: 'rgba(97, 97, 97, 0.9)',
  color: '#ffffff',
  padding: '5px 10px',
}

const Tooltip = ({ children, ...other }) => (
  <div className={css(container)} {...other}>
    <div className={css(arrow)} />
    <div className={css(tooltipBody)}>
      {children}
    </div>
  </div>
)

export default Tooltip
