import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';


const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
  marginTop: '2px'
}

const innerContainer = {
  display: 'flex',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '12px',
}

const resultsContainer = {
  backgroundColor: '#ffffff',
  flexGrow: '1',
  marginLeft: '15px',
  marginRight: '15px',
  borderRadius: '5px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
}


const itemContainer = {
  display: 'flex',
  paddingLeft: '15px',
  paddingRight: '15px',
  height: '48px',
  alignItems: 'center',
  borderBottom: 'solid 1px #dadce0',
  justifyContent: 'space-between'
}

const checkboxInput = {
  display: 'none',
  ':checked+div': {
    backgroundColor: '#327dd0',
    opacity: '1',
    border: '2px solid #327dd0',
  },
  ':checked+div:after': {
    transform: 'rotate(45deg)',
    content: '" "',
    position: 'absolute',
    left: '4',
    top: '0',
    width: '6px',
    height: '11px',
    border: '5px solid #ffffff',
    borderWidth: '0 2px 2px 0'
  }
}

const checkboxSubstitute = {
  cursor: 'pointer',
  height: '18px',
  width: '18px',
  position: 'relative',
  opacity: '0.54',
  border: '2px solid #010101',
  borderRadius: '2px',
}

const regNumber = {
  flexGrow: '1',
  marginLeft: '15px'
}


const invoices = [
  { regnumber: 'ESF-39200431-01', amount: '832 902,93', currency: 'KZT' },
  { regnumber: 'ESF-39200431-02', amount: '1 832 902,93', currency: 'KZT' },
  { regnumber: 'ESF-39200431-03', amount: '99 832 902,93', currency: 'KZT' },
  { regnumber: 'ESF-39200431-04', amount: '902,93', currency: 'KZT' },
  { regnumber: 'ESF-39200431-05', amount: '32 902,93', currency: 'KZT' },
];

const Result = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(innerContainer)}>
          <div className={css(resultsContainer)}>

            <div className={css(itemContainer)}>
              <div>
                <label>
                  <input type="checkbox" className={css(checkboxInput)} />
                  <div className={css(checkboxSubstitute)}></div>
                </label>
              </div>
              <div className={css(regNumber)}>
                Reg number
              </div>
              <div>
                Amount
              </div>
            </div>

            {invoices.map((item) => (
              <div className={css(itemContainer)} key={item.regnumber}>
                <div>
                  <label>
                    <input type="checkbox"  className={css(checkboxInput)} />
                    <div className={css(checkboxSubstitute)}></div>
                  </label>
                </div>
                <div className={css(regNumber)}>
                  {item.regnumber}
                </div>  
                <div>
                  {`${item.currency} ${item.amount}`}
                </div>  
              </div>
            ))}
          </div>
      </div>
    </SectionContent>
  </div>
);

export default Result;
