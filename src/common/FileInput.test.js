import React from 'react';
import { shallow } from 'enzyme';

import FileInput, { input } from './FileInput';
import { css } from 'emotion';

describe('<FileInput />', () => {
  it('should not blow', () => {
    expect(shallow(<FileInput />).length).toEqual(1);
  });

  it('should render children prop inside <label>', () => {
    const wrapper = shallow(<FileInput>foo</FileInput>);

    expect(wrapper.find('label').text()).toEqual('foo');
  });

  it('should pass other props down to <input>', () => {
    const wrapper = shallow(<FileInput foo="bar" />);

    expect(wrapper.find('input').prop('foo')).toEqual('bar');
  });

  it('should apply className to <input>', () => {
    const wrapper = shallow(<FileInput className="foo" />);

    expect(wrapper.find('input').prop('className')).toEqual(css(input, 'foo'));
  })
});
