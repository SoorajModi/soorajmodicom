import React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/home';

describe('Links', () => {
  it('should render Links component', () => {
    const component = shallow(<Home />);
    expect(component.length).toEqual(1);
  });

  it('should match Links snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
