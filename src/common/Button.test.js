import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  it('should not blow', () => {
    expect(shallow(<Button />).length).toEqual(1);
  });

  it('should render children prop inside button', () => {
    const wrapper = shallow(<Button>foo</Button>);

    expect(wrapper.find('button').text()).toEqual('foo');
  })
});
