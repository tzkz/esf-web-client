import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';
import { css } from 'emotion';

describe('<TextInput />', () => {
  const styles = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    border: '0',
    height: '50px',
    width: '100%',
  };

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

  it('should apply custom styles to input', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input').prop('className')).toEqual(css(styles));
  });

  it('should extend own styles with styles passed through className prop', () => {
    const moreStyles = {
      margin: '22px 3px 10px',
      flex: '0 1 50%',
    };
    const wrapper = shallow(<TextInput className={css(moreStyles)} />);

    expect(wrapper.find('input').prop('className')).toEqual(css(styles, moreStyles));
  });
});
