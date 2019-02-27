import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { css } from 'emotion';

const getContainerStyle = ({ pathname }) => ({
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
  color: pathname === '/' ? 'white' : '#697EFF',
  backgroundImage: pathname === '/' ? 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)' : 'none',
  height: pathname === '/' ? '74px' : '60px',
})

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
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
}

const rightContainer = {
  display: 'flex',
  flex: '1',
}

const getBurgerStyle = ({ pathname }) => ({
  padding: '10px 16px 10px 24px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fill: pathname === '/' ? '#FFF' : '#697EFF',
});

const burger = (
  <svg viewBox='0 0 24 24' width='24' height='24'>
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </svg>
);

const Header = ({ className, burgerClassName, onMenuClick, location }) => (
  <header className={css(getContainerStyle(location), className)}>
    <div className={css(headerContent)}>
      <div className={css(leftContainer)}>
        <button className={css(getBurgerStyle(location), burgerClassName)} onClick={onMenuClick}>
          {burger}
        </button>
      </div>
      <div className={css(rightContainer)}>
        <Link
          className={css(title)}
          to="/"
        >
          GetESF
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
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

export default connect(mapStateToProps)(withRouter(Header))
