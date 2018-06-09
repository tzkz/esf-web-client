import React from 'react';
import { shallow } from 'enzyme';

import SectionContent from './SectionContent';

describe('<SectionContent />', () => {
  it('should not blow', () => {
    expect(shallow(<SectionContent />).length).toEqual(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<SectionContent><div className="imachild" /></SectionContent>);

    expect(wrapper.find('.imachild').length).toEqual(1);
  });

  it('should pass props down to container div', () => {
    const wrapper = shallow(<SectionContent foo="bar" />);

    expect(wrapper.first().prop('foo')).toEqual('bar');
  });
});