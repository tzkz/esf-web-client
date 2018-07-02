import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';

const container = {
  backgroundColor: '#f8f8f8',
};

const dataContainer = {
  display: 'flex',
  justifyContent: 'space-around',
}

const input = {
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const customInput = {
  margin: '5px',
  flex: '0 1 50%',
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(dataContainer)}>
        <input type="text" className={css(input, customInput)} placeholder="Date from…" />
        <input type="text" className={css(input, customInput)} placeholder="Date to…" />
      </div>
    </SectionContent>
  </div>
);

export default Search;
