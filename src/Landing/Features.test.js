import React from 'react';
import { shallow } from 'enzyme';

import Features from './Features';

describe('<Features />', () => {
  it('should not blow', () => {
    expect(shallow(<Features />).length).toEqual(1);
  });
});
