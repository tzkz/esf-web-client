import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';

const container = {
<<<<<<< HEAD
  padding: '15px 9px 0px 9px',
=======
>>>>>>> bfc75dbb5e28649f626cb806a1aeda1f795f60e6
  backgroundColor: '#f8f8f8',
};

const dateContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0px 9px',
}

const input = {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const customInput = {
  margin: '5px 3px 5px',
  flex: '0 1 50%',
}

const largeInputTypes = {
  flexBasis: '100%',
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(dateContainer)}>
        <input type="text" className={css(input, customInput)} placeholder="Date from…" />
        <input type="text" className={css(input, customInput)} placeholder="Date to…" />
      </div>
      <div className={css(largeInputTypes)}>
      <input type="text" className={css(input, customInput, largeInputTypes)} placeholder="  Reg number" />
      </div>
    </SectionContent>
  </div>
);

export default Search;
