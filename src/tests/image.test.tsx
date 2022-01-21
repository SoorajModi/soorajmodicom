import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../pages/home/components';
import Expected from '../pages/home/assets/profile.png';

describe('Image', () => {
  it('should render Image component', () => {
    const component = shallow(<Image />);
    expect(component.length).toEqual(1);
  });

  it('should match Image snapshot', () => {
    const component = shallow(<Image />);
    expect(component).toMatchSnapshot();
  });

  it('renders an image', () => {
    const logo = shallow(<Image />);
    expect(logo.find('img').prop('src')).toEqual(Expected);
  });
});
