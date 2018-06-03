import React from 'react';
import { shallow } from 'enzyme';

import LoginInitial from './LoginInitial';

describe('<LoginInitial />', () => {
  it('should not blow', () => {
    expect(shallow(<LoginInitial />).length).toEqual(1);
  });
});
