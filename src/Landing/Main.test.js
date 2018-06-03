import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  it('should not blow', () => {
    expect(shallow(<Main />).length).toEqual(1);
  });
});