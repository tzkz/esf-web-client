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

  it('should add className prop to container\'s className', () => {
    const wrapper = shallow(<Section className="test" />);

    expect(wrapper.find('.container').first().prop('className')).toEqual('container test');
  });
});