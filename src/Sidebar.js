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
  fontFamily: 'roboto',
  height: '172px',
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
            <svg height='17.6px' width='17.5px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.5 17.6'><defs />
            <path fill='#327dd0' id='path' d='M15.5 1161.4l5 5-1.5 1.5-5-5v-.8l-.3-.3a6.362 6.362 0 0 1-4.2 1.5 6.039 6.039 0 0 1-4.6-1.9 6.6 6.6 0 0 1-1.9-4.6 6.039 6.039 0 0 1 1.9-4.6 6.6 6.6 0 0 1 4.6-1.9 6.19 6.19 0 0 1 4.6 1.9 6.6 6.6 0 0 1 1.9 4.6 6.361 6.361 0 0 1-1.5 4.2l.3.3h.7zm-9.2-1.3a4.224 4.224 0 0 0 3.2 1.3 4.377 4.377 0 0 0 3.2-1.3 4.588 4.588 0 0 0 0-6.4 4.224 4.224 0 0 0-3.2-1.3 4.377 4.377 0 0 0-3.2 1.3 4.224 4.224 0 0 0-1.3 3.2 4.626 4.626 0 0 0 1.3 3.2z' className='cls-1' transform='translate(-3 -1150.3)' />
            </svg>
          </div>
          <div className={css(searchButton)}>
            Search
          </div>
        </div>
        <div className={css(resultsButtonContainer)}>
          <div className={css(checklistIcon)}>
            <svg height='10px' width='18px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.9 10'>
              <defs />
            <path fill='#727272' id='path' d='M779.2 1086.8v-2h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm3.9-10h14v2h-14zm0 6v-2h14v2zm0 4v-2h14v2z'
            className='cls-1' transform='translate(-779.2 -1084.8)' />
            </svg>
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