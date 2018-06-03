import React from 'react';
import { shallow } from 'enzyme';
import ReactSelect from 'react-select';

import Select from './Select';

describe('<Select />', () => {
  it('should not blow', () => {
    expect(shallow(<Select />).length).toEqual(1);
  });

  it('should pass propd down to ReactSelect', () => {
    const wrapper = shallow(<Select foo="bar" />);

    expect(wrapper.find(ReactSelect).prop('foo')).toEqual('bar');
  });
});
