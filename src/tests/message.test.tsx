import React from 'react';
import { shallow } from 'enzyme';
import { Message } from '../pages/home/components';

describe('Message', () => {
  it('should render Message component', () => {
    const component = shallow(<Message />);
    expect(component.length).toEqual(1);
  });

  it('should match Message snapshot', () => {
    const component = shallow(<Message />);
    expect(component).toMatchSnapshot();
  });

  it('should render messsage', () => {
    const component = shallow(<Message />);
    expect(component.text()).toMatch(/Hi my name is Sooraj, and welcome to my website./);
  });
});
