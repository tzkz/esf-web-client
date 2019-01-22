import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { FormattedMessage } from 'react-intl';

import SectionContent from './SectionContent';
import LangSelect from './LangSelect';
import { logOut } from '../apiUtils';

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
  flex: '1',
}

const title = {
  fontFamily: 'Cuprum, sans-serif',
  fontSize: '2.25em',
  letterSpacing: '1.8px',
  fontWeight: 'bold',
}

const rightContainer = {
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-end',
}

const navItem = {
  display: 'none',
  fontSize: '16px',
  lineheight: 1.5,
  fontWeight: 600,
  padding: '0 16px',
  cursor: 'pointer',
  '@media (min-width: 768px)': {
    display: 'block',
  },
}

const navItemLogout = {
  display: 'none',
  '@media (min-width: 768px)': {
    display: 'block',
  },
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

const Header = ({
  localeValue, onLocaleChange, className, burgerClassName,
  onMenuClick, sessionId, user, password, dispatch
}) => (
  <header className={css(container, className)}>
    <SectionContent className={css(sectionContent)}>
      <div className={css(headerContent)}>
        <div className={css(leftContainer)}>
          <button className={css(burgerButton, burgerClassName)} onClick={onMenuClick}>
            {burger}
          </button>
        </div>
        <div className={css(title)}>GetESF</div>
        <div className={css(rightContainer)}>
          <div className={css(navItem)}>
            <LangSelect
              value={localeValue}
              onChange={onLocaleChange}
            />
          </div>
          { sessionId &&
            <div
              className={css(navItem, navItemLogout)}
              onClick={() => logOut({ user, password, sessionId}, dispatch)}
            >
              <FormattedMessage
                id="Header.Logout"
                defaultMessage="Log Out"
              />
            </div>
          }
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
