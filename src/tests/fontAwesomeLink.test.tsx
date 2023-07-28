/* eslint-disable react/jsx-props-no-spreading */
import { shallow, mount } from 'enzyme';
import FontAwesomeLink, { FontAwesomeLinkProps } from '../pages/home/components/fontAwesomeLink';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const props: FontAwesomeLinkProps = {
  icon: faCheck,
  href: 'Test href',
  circleStyle: '',
  iconStyle: '',
  tooltip: 'Test Tooltip',
  download: false,
};

describe('<FontAwesomeLink /> integration', () => {
  it('should render component', () => {
    const component = shallow(<FontAwesomeLink {...props} />);

    const received: number = component.length;
    const expected: number = 1;

    expect(received).toEqual(expected);
  });

  it('should render an icon with a link', () => {
    const component = mount(<FontAwesomeLink {...props} />);
    
    const received: string = component.find({ 'data-testid': 'anchor-wrapper' }).prop('href');
    const expected: string = props.href
    
    expect(received).toBe(expected);
  });

  it('should render an icon with disabled download option', () => {
    const component = mount(<FontAwesomeLink {...props} />);
    
    const received: boolean = component.find({ 'data-testid': 'anchor-wrapper' }).prop('download');
    const expected: boolean = props.download
    
    expect(received).toBe(expected);
  });

  it('should render an icon with enabled download option', () => {
    const component = mount(<FontAwesomeLink {...props} download={true} />);
    
    const received: boolean = component.find({ 'data-testid': 'anchor-wrapper' }).prop('download');
    const expected: boolean = true
    
    expect(received).toBe(expected);
  });
  
  it('should render the icon', () => {
    const component = mount(<FontAwesomeLink {...props} />);
    
    const received: IconProp = component.find('FontAwesomeIcon').prop('icon');
    const expected: IconProp = props.icon
    
    expect(received).toBe(expected);
  });
});
