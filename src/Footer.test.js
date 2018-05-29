import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('should not blow', () => {
    expect(shallow(<Footer />).length).toEqual(1);
  });
});
