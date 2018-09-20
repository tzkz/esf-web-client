import React from 'react';
import { css } from 'emotion';
import Button from './common/Button';
import SectionContent from './common/SectionContent';
import Select from './common/Select';

const container = {
  backgroundColor: '#ffffff',
  margin: 'auto 16px',
  minHeight: '568px',
}

const innerContainer = {
  maxWidth: '290px',
  margin: 'auto',
}

const closeButton = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  float: 'right',
  marginTop: '20px',
  width: '14px',
}

const header = {
  fontFamily: 'Open Sans',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.38',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#262626',
  paddingTop: '160px',
  paddingBottom: '50px',
}

const companyDropbtn = {
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.38',
  letterSpacing:'normal',
  textAlign: 'left',
  color: '#262626',
}

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
}

const buttons = {
  width: '138px',
  height: '40px',
  borderRadius: '5px',
  lineHeight: '1.38',
  border: 'solid 1px #327dd0',
  color: '#327dd0',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: 'transparent',
  }
}

const buttonsChecked = {
  backgroundColor: '#327dd0',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#327dd0',
  }
}

const companyOptions = [
  {value:'option1', label: 'ТОО "Самая лучшая компания"'},
  {value:'option2', label: 'ТОО "Компания Тимура"'},
  {value:'option3', label: 'ТОО "Компания Ербола"'},
];

const Company = () => (
  <div className={css(container)}>
    <SectionContent>
      <button className={css(closeButton)}>
        <svg className={css(closeButton)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <path d="M14 1.4L8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0z" fill="#262626"/>
        </svg>
      </button>
      <div className={css(innerContainer)}>
        <div className={css(header)}>
          Hello John Doe,
          Select your company
        </div>
        <div className={css(companyDropbtn)}>
          <Select placeholder="Company"
            options={companyOptions}
          />
        </div>
        <div className={css(buttonsContainer)}>
          <Button className={css(buttons)}>
            Cancel
          </Button>
          <Button className={css(buttons, buttonsChecked)}>
            Continue
          </Button>
        </div>
      </div>
    </SectionContent>
  </div>
);

export default Company;
