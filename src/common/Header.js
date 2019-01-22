import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';

import SectionContent from './SectionContent';

const container = {
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
  color: '#697EFF',
  height: '60px',
  '@media (min-width: 768px)': {
    height: '100px',
  }
}

const sectionContent = {
  height: '100%',
}

const headerContent = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    justifyContent: 'space-between',
  }
};

const leftContainer = {
}

const title = {
  fontFamily: 'Cuprum, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
}

const rightContainer = {
  display: 'flex',
  flex: '1',
}

const burgerButton = {
  padding: '10px 16px 10px 24px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fill: '#FFF',
};

const burger = (
  <svg viewBox='0 0 24 24' width='24' height='24'>
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </svg>
);

const Header = ({ className, burgerClassName, onMenuClick }) => (
  <header className={css(container, className)}>
    <SectionContent className={css(sectionContent)}>
      <div className={css(headerContent)}>
        <div className={css(leftContainer)}>
          <button className={css(burgerButton, burgerClassName)} onClick={onMenuClick}>
            {burger}
          </button>
        </div>
        <div className={css(rightContainer)}>
          <div className={css(title)}>GetESF</div>
        </div>
      </div>
    </SectionContent>
  </header>
);

Header.propTypes = {
  localeValue: PropTypes.string,
  onLocaleChange: PropTypes.func,
  className: PropTypes.string,
  burgerClassName: PropTypes.string,
  onMenuClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    sessionId: state.sessionId,
    user: state.user,
    password: state.password,
  }
}

export default connect(mapStateToProps)(Header);
