import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('<Section />', () => {
  it('should not blow', () => {
    expect(shallow(<Section />).length).toEqual(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Section><div className="imachild" /></Section>);

    expect(wrapper.find('.imachild').length).toEqual(1);
  });

  it('should pass props down to container div', () => {
    const wrapper = shallow(<Section foo="bar" />);

    expect(wrapper.first().prop('foo')).toEqual('bar');
  });
});