import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'emotion';

import Button, { button } from './Button';

describe('<Button />', () => {
  it('should not blow', () => {
    expect(shallow(<Button />).length).toEqual(1);
  });

  it('should render children prop inside button', () => {
    const wrapper = shallow(<Button>foo</Button>);

    expect(wrapper.find('button').text()).toEqual('foo');
  });

  it('should add className prop to button className', () => {
    const wrapper = shallow(<Button className="foo" />);

    expect(wrapper.find('button').prop('className')).toEqual(css(button, 'foo'));
  });
});
