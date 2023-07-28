import React from 'react';
import { shallow } from 'enzyme';
import Links from '../pages/home/components/links';

describe('<Links /> integration', () => {
  it('should render component', () => {
    const component = shallow(<Links />);
    expect(component.length).toEqual(1);
  });
});
