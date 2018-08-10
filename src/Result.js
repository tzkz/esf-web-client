import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';

const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
};

const Result = () => (
  <div className={css(container)}>
    <SectionContent>
      result page
    </SectionContent>
  </div>
);

export default Result;
