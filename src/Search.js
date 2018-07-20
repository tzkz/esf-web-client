import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';
import TextInput from './common/TextInput';

const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
};

const inputRow = {
  display: 'flex',
  padding: '5px 12px',
};

const dateInput = {
  flex: '0 1 50%',
};

const dateFrom = {
  marginRight: '3px',
};

const dateTo = {
  marginLeft: '3px',
};

const largeInput = {
  flex: '1',
};

const radioInput = {
  display: 'none',
  ':checked + label': {
    backgroundColor: '#327dd0',
    borderRadius: '5px',
    color: ' #ffffff',
  } 
};

const radioContainer = {
  display: 'flex',
  flex: '1',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  height: '40px',
  padding: '3px'
};

const radioItem = {
  flex: '1',
  display: 'flex',
}

const radioLabel = {
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#bbbbbb',
}

const invoiceTypeFonts = {
  fontSize: '12px',
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(inputRow)}>
        <TextInput className={css(dateInput, dateFrom)} placeholder="Date from…" />
        <TextInput className={css(dateInput, dateTo)} placeholder="Date to…" />
      </div>
      <div className={css(inputRow)}>
        <TextInput className={css(largeInput)} placeholder="Reg number" />
      </div> 
      <div className={css(inputRow)}>
        <div className={css(radioContainer)}>
          <div className={css(radioItem)}>
            <input type="radio" name="choose1" id="inbound" className={css(radioInput)}/>
            <label htmlFor="inbound" className={css(radioLabel)}>Inbound</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose1" id="outbound" className={css(radioInput)}/>
            <label htmlFor="outbound" className={css(radioLabel)}>Outbound</label>
          </div>
        </div>  
      </div>
      <div className={css(inputRow)}>
        <TextInput className={css(largeInput)} placeholder="Customer/supplier BIN" />
      </div>
      <div className={css(inputRow)}>
        <div className={css(radioContainer)}>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="any" className={css(radioInput)}/>
            <label htmlFor="any" className={css(radioLabel, invoiceTypeFonts)}>Any</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="ordinary" className={css(radioInput)}/>
            <label htmlFor="ordinary" className={css(radioLabel, invoiceTypeFonts)}>Ordinary</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="corrected" className={css(radioInput)}/>
            <label htmlFor="corrected" className={css(radioLabel, invoiceTypeFonts)}>Corrected</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="additional" className={css(radioInput)}/>
            <label htmlFor="additional" className={css(radioLabel, invoiceTypeFonts)}>Additional</label>
          </div>
        </div>  
      </div>
    </SectionContent>
  </div>
);

export default Search;
