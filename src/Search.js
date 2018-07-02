import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';

const container = {
  padding: '0px 9px',
  backgroundColor: '#f8f8f8',
};

const dataContainer = {
  display: 'flex',
  justifyContent: 'space-around',
}

const input = {
  fontColor: '#bbbbbb',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const customInput = {
  margin: '22px 3px 10px',
  flex: '0 1 50%',
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(dataContainer)}>
        <input type="text" className={css(input, customInput)} placeholder="  Date from…" />
        <input type="text" className={css(input, customInput)} placeholder="  Date to…" />
      </div>
    </SectionContent>
  </div>
);

export default Search;
