import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import { css } from 'emotion';

describe('<Header />', () => {
  it('should not blow', () => {
    expect(shallow(<Header />).length).toEqual(1);
  });

  it('should apply className prop to container element', () => {
    const container = {
      boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
      color: '#0194bf',
    };
    const custom = { backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)' };
    const wrapper = shallow(<Header className={css(custom)} />);

    expect(wrapper.find('header').prop('className')).toEqual(css(container, custom));
  })
});
