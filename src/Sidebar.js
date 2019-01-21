import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from './apiUtils';
import LangSelect from '../src/common/LangSelect';

const Container = {
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '100%',
  fontSize: '16px',
  zIndex: '1000',
}

const drawerContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '264px',
  height: '100%',
  boxShadow: '0 19px 36px 0 rgba(0, 0, 0, 0.28)',
}

const dropdownContainer = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundColor: '#744fc6',
  color: '#ffffff',
  height: '172px',
  paddingBottom: '15px',
}

const searchResultContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fafafa',
  height: '70%',
}

const navLinkItem = {
  textDecoration: 'none',
  color: '#727272',
  margin: '0px 10px',
}

// const active = {
//   backgroundColor: '#e3e7ff',
//   borderRadius: '5px',
//   color: '#697eff',
// }

const buttonsContainer = {
  display: 'flex',
  alignItems: 'center',
}

const icons = {
  display: 'flex',
  margin: '12px 15px',
}

const buttons = {
  margin: '12px 15px',
}

const splitLine = {
  width: '263px',
  height: '0px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  margin: '10px 0px',
}

const logOutButton = {
  border: 'none',
  backgroundColor: 'transparent',
  padding: '0px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
}

const navItemPadding = {
  paddingTop: '25px',
  paddingBottom: '2px',
}

const overlayContainer = {
  backgroundColor: 'rgba(0, 0, 0, 0.32)',
  flexGrow: '1',
  height: '100%',
}

const langSelectButton = {
  flexGrow: '1',
  margin: '12px 5px',
}

const Sidebar = ({ localeValue, onLocaleChange, onOverlayClick, sessionId, user, password, dispatch }) => (
  <div className={css(Container)}>
    <div className={css(drawerContainer)}>
      <div className={css(dropdownContainer)}>
      </div>
      <div className={css(searchResultContainer, navItemPadding)}>
        <NavLink exact to="/search" className={css(navLinkItem)}>
          <div className={css(buttonsContainer)}>
            <div className={css(icons)}>
              <svg height='17.6px' width='17.5px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.5 17.6'><defs />
                <path fill='currentColor' id='path' d='M15.5 1161.4l5 5-1.5 1.5-5-5v-.8l-.3-.3a6.362 6.362 0 0 1-4.2 1.5 6.039 6.039 0 0 1-4.6-1.9 6.6 6.6 0 0 1-1.9-4.6 6.039 6.039 0 0 1 1.9-4.6 6.6 6.6 0 0 1 4.6-1.9 6.19 6.19 0 0 1 4.6 1.9 6.6 6.6 0 0 1 1.9 4.6 6.361 6.361 0 0 1-1.5 4.2l.3.3h.7zm-9.2-1.3a4.224 4.224 0 0 0 3.2 1.3 4.377 4.377 0 0 0 3.2-1.3 4.588 4.588 0 0 0 0-6.4 4.224 4.224 0 0 0-3.2-1.3 4.377 4.377 0 0 0-3.2 1.3 4.224 4.224 0 0 0-1.3 3.2 4.626 4.626 0 0 0 1.3 3.2z' className='cls-1' transform='translate(-3 -1150.3)' />
              </svg>
            </div>
            <div className={css(buttons)}>
                Search
            </div>
          </div>
        </NavLink>
        <NavLink exact to="/result" className={css(navLinkItem)}>
          <div className={css(buttonsContainer)}>
            <div className={css(icons)}>
              <svg height='10px' width='18px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.9 10'><defs />
                <path fill='currentColor' id='path' d='M779.2 1086.8v-2h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm3.9-10h14v2h-14zm0 6v-2h14v2zm0 4v-2h14v2z' className='cls-1' transform='translate(-779.2 -1084.8)' />
              </svg>
            </div>
            <div className={css(buttons)}>
                Results
            </div>
          </div>
        </NavLink>
        <div className={css(splitLine)} />
        <div className={css(buttonsContainer, navLinkItem)}>
          <div className={css(icons)}>
            <svg height='20px' width='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><defs />
              <path fill='#727272' id='ic_language_24px' d='M11.99 2A10 10 0 1 0 22 12 10 10 0 0 0 11.99 2zm6.93 6h-2.95a15.649 15.649 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04A14.087 14.087 0 0 1 13.91 8h-3.82A14.087 14.087 0 0 1 12 4.04zM4.26 14a7.822 7.822 0 0 1 0-4h3.38a16.515 16.515 0 0 0-.14 2 16.515 16.515 0 0 0 .14 2zm.82 2h2.95a15.649 15.649 0 0 0 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.649 15.649 0 0 0 8.03 8zM12 19.96A14.087 14.087 0 0 1 10.09 16h3.82A14.087 14.087 0 0 1 12 19.96zM14.34 14H9.66a14.713 14.713 0 0 1-.16-2 14.585 14.585 0 0 1 .16-2h4.68a14.585 14.585 0 0 1 .16 2 14.713 14.713 0 0 1-.16 2zm.25 5.56A15.649 15.649 0 0 0 15.97 16h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.515 16.515 0 0 0 .14-2 16.515 16.515 0 0 0-.14-2h3.38a7.822 7.822 0 0 1 0 4z' className='cls-1' transform='translate(-2 -2)' />
            </svg>
          </div>
          <LangSelect className={css( langSelectButton)} value={localeValue} onChange={onLocaleChange}>
            English
          </LangSelect>
        </div>
        <button className={css(logOutButton, buttonsContainer, navLinkItem)}>
          <div className={css(icons)}>
          <svg height='18px' width='18px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'><defs />
            <path fill='currentColor' id='ic_power_settings_new_24px' d='M13 3h-2v10h2zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12 7 7 0 1 1 7.58 6.58L6.17 5.17A8.992 8.992 0 1 0 21 12a8.932 8.932 0 0 0-3.17-6.83z' className='cls-1' transform='translate(-3 -3)' />
          </svg>
          </div>
          <div className={css(buttons)} onClick={() => logOut({ user, password, sessionId}, dispatch)}>
            Log Out
          </div>
        </button>
      </div>
    </div>
    <div className={css(overlayContainer)} onClick={onOverlayClick} />
  </div>
);

Sidebar.propTypes = {
  onOverlayClick: PropTypes.func,
  localeValue: PropTypes.string,
  onLocaleChange: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    sessionId: state.sessionId,
    user: state.user,
    password: state.password,
  }
}

export default connect(mapStateToProps)(Sidebar);

