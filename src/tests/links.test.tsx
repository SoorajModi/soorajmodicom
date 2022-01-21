import React from 'react';
import { shallow } from 'enzyme';
import { Links } from '../pages/home/components';

describe('Links', () => {
  it('should render Links component', () => {
    const component = shallow(<Links />);
    expect(component.length).toEqual(1);
  });

  it('should match Links snapshot', () => {
    const component = shallow(<Links />);
    expect(component).toMatchSnapshot();
  });
});
