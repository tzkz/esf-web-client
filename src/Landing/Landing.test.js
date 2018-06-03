import React from 'react';
import { shallow } from 'enzyme';

import Landing from './Landing';

describe('<Landing />', () => {
  it('should not blow', () => {
    expect(shallow(<Landing />).length).toEqual(1);
  });
});
