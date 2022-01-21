import React from 'react';
import { shallow } from 'enzyme';
import { Name } from '../pages/home/components';

describe('Name', () => {
  it('should render Name component', () => {
    const component = shallow(<Name />);
    expect(component.length).toEqual(1);
  });

  it('should match Name snapshot', () => {
    const component = shallow(<Name />);
    expect(component).toMatchSnapshot();
  });

  it('should render my name', () => {
    const component = shallow(<Name />);
    expect(component.text()).toMatch(/Sooraj Modi/);
  });
});
