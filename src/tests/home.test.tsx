import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home, { messages } from '../pages/home';
import Profile from '../pages/home/assets/profile.png'

describe('<Home /> integration', () => {
  it('should render Home component', () => {
    const component = shallow(<Home />);
    expect(component.length).toEqual(1);
  });
  
  it('should render profile picture', () => {
    const component = mount(<Home />);
    const received = component.find({ 'data-testid': 'profile' });

    expect(received.prop("src")).toBe(Profile);
  });

  it('should render name', () => {
    const component = mount(<Home />);
    const received = component.find({ 'data-testid': 'name' }).text();

    expect(received).toBe(messages.name);
  });

  it('should render title', () => {
    const component = mount(<Home />);
    const received = component.find({ 'data-testid': 'title' }).text();

    expect(received).toBe(messages.title);
  });

  it('should render description', () => {
    const component = mount(<Home />);
    const received = component.find({ 'data-testid': 'description' }).text();

    expect(received).toBe(messages.description);
  });
});
