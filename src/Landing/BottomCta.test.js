import React from 'react';
import { shallow } from 'enzyme';

import BottomCta from './BottomCta';

describe('<BottomCta />', () => {
  it('should not blow', () => {
    expect(shallow(<BottomCta />).length).toEqual(1);
  });
});
