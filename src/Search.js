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
}

const dateFrom = {
  marginRight: '3px',
}

const dateTo = {
  marginLeft: '3px',
}

const largeInput = {
  flex: '1',
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
        <TextInput className={css(largeInput)} placeholder="Customer/supplier BIN" />
      </div>
    </SectionContent>
  </div>
);

export default Search;
