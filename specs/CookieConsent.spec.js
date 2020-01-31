import React from 'react';
import { shallow } from 'enzyme';
import CookieConsent from '../src/components/CookieConsent';

const testColor = '#fff';
const testBackground = '#000';
const testText = 'This is correct text';
const testCustomContent = 'Custom content';
const testClassName = 'customClass';

describe('CookieConsent', () => {
  it('should render correctly', () => {
    const component = shallow(<CookieConsent/>);
    expect(component).toMatchSnapshot();
  });
  it('should not render', () => {
    const component = shallow(<CookieConsent>{testText}</CookieConsent>);
    component.setState({ hasStorage: true });
    expect(component.get(0)).toEqual(null);
  });
  it('should have background', () => {
    const component = shallow(<CookieConsent background={testBackground}/>);
    expect(component.find('#cookie-consent').get(0).props.style.backgroundColor).toEqual(testBackground);
  });
  it('should have text color', () => {
    const component = shallow(<CookieConsent color={testColor}/>);
    expect(component.find('#cookie-consent').get(0).props.style.color).toEqual(testColor);
  });
  it('should have bottom position', () => {
    const component = shallow(<CookieConsent bottomPosition={true}/>);
    expect(component.find('#cookie-consent').get(0).props.style.bottom).toEqual(0);
  });
  it('should have top position', () => {
    const component = shallow(<CookieConsent/>);
    expect(component.find('#cookie-consent').get(0).props.style.top).toEqual(0);
  });
  it('should close notification', () => {
    const component = shallow(<CookieConsent/>);
    component.find('#cookie-consent-button').simulate('click');
    expect(component.find('#cookie-consent').get(0).props.style.visibility).toEqual('hidden');
  });
  it('should close notification bottom position', () => {
    const component = shallow(<CookieConsent bottomPosition={true}/>);
    component.find('#cookie-consent-button').simulate('click');
    expect(component.find('#cookie-consent').get(0).props.style.visibility).toEqual('hidden');
  });
  it('should have a className', () => {
    const component = shallow(<CookieConsent className={testClassName}>
      {testCustomContent}
    </CookieConsent>);
    expect(component.find(`.${testClassName}`)).toExist();
  });
  it('should have a className', () => {
    const component = shallow(<CookieConsent className={testClassName}>
      {testCustomContent}
    </CookieConsent>);
    expect(component.find(`.${testClassName}`)).toExist();
  });
  it('should have a button className', () => {
    const component = shallow(<CookieConsent buttonClassName={testClassName}>
      {testCustomContent}
    </CookieConsent>);
    expect(component.find('#cookie-consent-button')).toHaveClassName(testClassName);
  });
});
