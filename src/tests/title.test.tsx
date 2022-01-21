import React from 'react';
import { shallow } from 'enzyme';
import { Title } from '../pages/home/components';

describe('Title', () => {
  it('should render Title component', () => {
    const component = shallow(<Title />);
    expect(component.length).toEqual(1);
  });

  it('should match Title snapshot', () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
