import React from 'react';
import renderer from 'react-test-renderer';

import SectionContent from './SectionContent';

describe('<SectionContent />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<SectionContent><div /></SectionContent>).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should render children', () => {
    const testRenderer = renderer.create(<SectionContent><div className="imachild" /></SectionContent>)
    const testInstance = testRenderer.root

    expect(testInstance.findByProps({ className: 'imachild' })).toBeTruthy()
  });

  it('should pass props down to container div', () => {
    const testRenderer = renderer.create(<SectionContent foo="bar"><div /></SectionContent>)
    const testInstance = testRenderer.root

    expect(testInstance.findByType('div').props.foo).toEqual('bar');
  });
});
