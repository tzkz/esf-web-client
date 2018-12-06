import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Select from './common/Select';

const Container = {
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '100%',
  fontSize: '16px',
}

const drawerContainer = {
  flexBasis: '75%',
  height: '100%',
  boxShadow: '0 19px 36px 0 rgba(0, 0, 0, 0.28)',
}

const dropdownContainer = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundColor: '#744fc6',
  color: '#ffffff',
  fontFamily: 'roboto',
  height: '30%',
  paddingBottom: '15px',
}

const searchResultContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  height: '70%',
  fontFamily: 'roboto',
}

const searchButtonContainer = {
  display: 'flex',
}

const magnifierSymbol = {
  margin: '20px 20px',
}

const searchButton = {
  color: '#4285f4',
  margin: '20px 20px',
}

const resultsButtonContainer = {
  display: 'flex',
}

const checklistIcon = {
  margin: '20px 20px',
}

const resultsButton = {
  color: 'rgba(0, 0, 0, 0.87)',
  margin: '20px 20px',
}

const overlayContainer = {
  backgroundColor: 'transparent',
  flexGrow: '1',
  height: '100%',
}

const companyOptions = [
  {value:'option1', label: 'ТОО "Самая лучшая компания"'},
  {value:'option2', label: 'ТОО "Компания Тимура"'},
  {value:'option3', label: 'ТОО "Компания Ербола"'},
];

const Sidebar = ({ onOverlayClick }) => (
  <div className={css(Container)}>
    <div className={css(drawerContainer)}>
      <div className={css(dropdownContainer)}>
        <Select placeholder="Company"
          options={companyOptions}
        />
      </div>
      <div className={css(searchResultContainer)}>
        <div className={css(searchButtonContainer)}>
          <div className={css(magnifierSymbol)}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24" height="17.5" width="17.5" enable-background="new 0 0 17 17"><g color="#327dd0">
            <path fill="currentColor" d="M 9 2 C 5.1 2 2 5.1 2 9 C 2 12.9 5.1 16 9 16 C 10.722428 16 12.28779 15.386196 13.5 14.375 L 14 14.875 L 14 15.6875 L 20.3125 22 L 22 20.3125 L 15.6875 14 L 14.8125 14 L 14.34375 13.53125 C 15.372135 12.314388 16 10.738606 16 9 C 16 5.1 12.9 2 9 2 z M 9 4 C 11.8 4 14 6.2 14 9 C 14 11.8 11.8 14 9 14 C 6.2 14 4 11.8 4 9 C 4 6.2 6.2 4 9 4 z"/></g>
            </svg>
          </div>
          <div className={css(searchButton)}>
            Search
          </div>
        </div>
        <div className={css(resultsButtonContainer)}>
          <div className={css(checklistIcon)}>
          <svg height="12" width="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><g color="#727272"><path fill="currentColor" d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/></g></svg>
          </div>
          <div className={css(resultsButton)}>
            Results
          </div>
        </div>
      </div>
    </div>
    <div className={css(overlayContainer)} onClick={onOverlayClick} />
  </div>
);

Sidebar.propTypes = {
  onOverlayClick: PropTypes.func,
};

export default Sidebar