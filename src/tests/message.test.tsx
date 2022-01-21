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
});
