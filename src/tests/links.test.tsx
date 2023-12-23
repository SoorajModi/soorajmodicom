import React from 'react';
import { shallow, mount } from 'enzyme';
import Links from '../pages/home/components/links';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

describe('<Links /> integration', () => {
  it('should render component', () => {
    const component = shallow(<Links />);

    const received: number = component.length;
    const expected: number = 1;

    expect(received).toEqual(expected);
  });

  it('should render icons', () => {
    const component = mount(<Links />);

    const received: number = component.find("FontAwesomeIcon").length;
    const expected: number = 4;

    expect(received).toBe(expected);
  });

  it('should render GitHub icon first', () => {
    const component = mount(<Links />);

    const received: IconProp = component.find("FontAwesomeIcon").at(0).prop("icon");
    const expected: IconProp = faGithub;

    expect(received).toBe(expected);
  });

  it('should render LinkedIn icon second', () => {
    const component = mount(<Links />);

    const received: IconProp = component.find("FontAwesomeIcon").at(1).prop("icon");
    const expected: IconProp = faLinkedin;

    expect(received).toBe(expected);
  });

  it('should render Discord icon third', () => {
    const component = mount(<Links />);

    const received: IconProp = component.find("FontAwesomeIcon").at(2).prop("icon");
    const expected: IconProp = faDiscord;

    expect(received).toBe(expected);
  });

  it('should render Resume icon third', () => {
    const component = mount(<Links />);

    const received: IconProp = component.find("FontAwesomeIcon").at(3).prop("icon");
    const expected: IconProp = faFileAlt;

    expect(received).toBe(expected);
  });
});
