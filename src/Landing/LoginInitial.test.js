import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import LoginInitial from './LoginInitial';
import Button from '../common/Button';

describe('<LoginInitial />', () => {
  it('should not blow', () => {
    expect(shallow(<LoginInitial />).length).toEqual(1);
  });

  it('should call onDemoClick() prop callback when "try demo" button is clicked', () => {
    const onDemoClickSpy = sinon.spy()
    const wrapper = shallow(<LoginInitial onDemoClick={onDemoClickSpy} />);

    wrapper.find(Button).simulate('click');
    expect(onDemoClickSpy.calledOnce).toEqual(true);
  })
});
