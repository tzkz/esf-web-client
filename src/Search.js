import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';

const container = {
  backgroundColor: '#f8f8f8'
};

const input = {
  borderRadius: '5px',
  backgroundColor: '#ffffff',
};

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <input type="text" className={css(input)} placeholder="Date from…" />
    </SectionContent>
  </div>
);

export default Search;
