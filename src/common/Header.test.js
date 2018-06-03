import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('should not blow', () => {
    expect(shallow(<Header />).length).toEqual(1);
  });
});
