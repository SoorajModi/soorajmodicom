/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import FontAwesomeLink from '../pages/home/components/fontAwesomeLink';

const props = {
  icon: null,
  href: 'Test href',
  circleStyle: '',
  iconStyle: '',
  tooltip: 'Test Tooltip',
  download: false,
};

describe('FontAwesomeLink', () => {
  it('should render FontAwesomeLink component', () => {
    const component = shallow(<FontAwesomeLink {...props} />);
    expect(component.length).toEqual(1);
  });

  it('should match FontAwesomeLink snapshot', () => {
    const component = shallow(<FontAwesomeLink {...props} />);
    expect(component).toMatchSnapshot();
  });
});
