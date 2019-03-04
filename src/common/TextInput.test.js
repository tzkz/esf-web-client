import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should not blow', () => {
    expect(shallow(<TextInput />).length).toEqual(1);
  });

  it('should set input type to "text"', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input').prop('type')).toEqual('text');
  });

  it('should pass "other" props down to input', () => {
    const wrapper = shallow(<TextInput foo="bar" />);

    expect(wrapper.find('input').prop('foo')).toEqual('bar');
  });
});
