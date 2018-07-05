import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';
import TextInput from './common/TextInput';

const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
};

const dateContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0px 9px',
}

const customInput = {
  margin: '5px 3px 5px',
  flex: '0 1 50%',
}

const largeInputTypes = {
  display: 'flex',
  flex: '0 1 100%',
  padding: '0px 9px',
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(dateContainer)}>
        <TextInput className={css(customInput)} placeholder="Date from…" />
        <TextInput className={css(customInput)} placeholder="Date to…" />
      </div>
      <div className={css(largeInputTypes)}>
        <TextInput className={css(customInput, largeInputTypes)} placeholder="Reg number" />
      </div> 
    </SectionContent>
  </div>
);

export default Search;
