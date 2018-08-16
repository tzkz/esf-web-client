import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';


const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
  marginTop: '2px'
};

const innerContainer = {
  display: 'flex',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '12px',
}

const formContainer = {
  backgroundColor: '#ffffff',
  flexGrow: '1',
  marginLeft: '15px',
  marginRight: '15px',
  borderRadius: '5px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
}

const innerForm = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '15px',
  paddingRight: '15px',
  height: '48px',
  alignItems: 'center',
  borderBottom: 'solid 1px #dadce0',
}

const checkboxItems = {
  display: 'flex',
  flexDirection: 'row-reverse',
}

const checkboxStyle = {
  opacity: '0',
}

const checkboxSubstitute = {
  height: '18px',
  width: '18px',
  position: 'relative',
  opacity: '0.54',
  border: '2px solid #010101',
}

const checkboxSubstituteChecked = {
  ':checked+div':{
    backgroundColor: '#327dd0',
    opacity: '1',
    border: '5px solid #327dd0',
    }
}

const resultChecked = {
  ':checked+div:after':{
  transform: 'rotate(45deg)',
  content: '" "',
  position: 'absolute',
  left: '2px',
  top: '-2px',
  width: '6px',
  height: '11px',
  border: '5px solid #ffffff',
  borderWidth: '0 2px 2px 0'
  }
}

const Result = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(innerContainer)}>
          <div className={css(formContainer)}>
            <div className={css(innerForm)}>
              <label className={css(checkboxItems)}>Reg number
                <input type="checkbox" className={css(checkboxStyle)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                Amount
              </div>
            </div>
            <div className={css(innerForm)}>
              <label className={css(checkboxItems)}>ESF-39200431-00
                <input type="checkbox"  className={css(checkboxStyle, resultChecked, checkboxSubstituteChecked)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                T-99342333
              </div>
            </div>
            <div className={css(innerForm)}>
            <label className={css(checkboxItems)}>ESF-39200432-00
                <input type="checkbox" className={css(checkboxStyle, resultChecked, checkboxSubstituteChecked)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                T-99342333
              </div>
            </div>
            <div className={css(innerForm)}>
            <label className={css(checkboxItems)}>ESF-39200433-00
                <input type="checkbox" className={css(checkboxStyle, resultChecked, checkboxSubstituteChecked)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                T-99342333
              </div>
            </div>
            <div className={css(innerForm)}>
            <label className={css(checkboxItems)}>ESF-39200434-00
                <input type="checkbox" className={css(checkboxStyle, resultChecked, checkboxSubstituteChecked)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                T-99342333
              </div>
            </div>
            <div className={css(innerForm)}>
            <label className={css(checkboxItems)}>ESF-39200435-00
                <input type="checkbox" className={css(checkboxStyle, resultChecked, checkboxSubstituteChecked)} />
                <div className={css(checkboxSubstitute)}></div>
              </label>
              <div>
                T-99342333
              </div>
            </div>
          </div>
      </div>
    </SectionContent>
  </div>
);

export default Result;
