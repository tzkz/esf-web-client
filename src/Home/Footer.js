import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { connect } from 'react-redux'

import LangSelect from '../common/LangSelect'
import { SET_LOCALE } from '../store'

const container = {
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
  paddingTop: '18px',
}

const logo = {
  fill: '#FFF',
}

const githubLink = {
  padding: '0 16px',
}

const langSelect = {
  flexBasis: '70px',
  margin: '2px 8px',
  color: '#FFFFFF',
}

const githubLogo = (
  <svg height="20" className={css(logo)} viewBox="0 0 16 16" width="20">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const Footer = ({ locale, dispatch }) => (
  <div className={css(container)}>
    <a
      href="https://github.com/timurengineer/esf-web-client"
      target="_blank"
      rel="noopener noreferrer"
      className={css(githubLink)}
    >
      {githubLogo}
    </a>
    <LangSelect
      value={locale}
      onChange={value => dispatch({ type: SET_LOCALE, locale: value })}
      menuPlacement="top"
      className={css(langSelect)}
    />
  </div>
)

Footer.propTypes = {
  locale: PropTypes.string,
  dispatch: PropTypes.func,
}

Footer.defaultProps = {
  locale: 'en-US',
  dispatch: () => {},
}

const mapStateToProps = state => ({
  locale: state.locale,
})

export default connect(mapStateToProps)(Footer)
