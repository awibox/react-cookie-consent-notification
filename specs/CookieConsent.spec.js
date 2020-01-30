import React from 'react';
import { shallow } from 'enzyme';
import CookieConsent from '../src/components/CookieConsent';

const testColor = '#fff';
const testBackground = '#000';
const testText = 'This is correct text';
const testCookiePolicyLink = '/cookie-policy';
const testCookiePolicyName = 'Private Policy';
const testCookiePolicyText = 'This is text before link';
const testIconSize = 22;
const testPadding = 18;
const testCustomContent = 'Custom content';
const testClassName = 'customClass';

describe('CookieConsent', () => {
  it('should render correctly', () => {
    const component = shallow(<CookieConsent/>);
    expect(component).toMatchSnapshot();
  });
  it('should not render', () => {
    const component = shallow(<CookieConsent/>);
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
    component.find('#cookie-consent-close').simulate('click');
    expect(component.find('#cookie-consent').get(0).props.style.visibility).toEqual('hidden');
  });
  it('should close notification bottom position', () => {
    const component = shallow(<CookieConsent bottomPosition={true}/>);
    component.find('#cookie-consent-close').simulate('click');
    expect(component.find('#cookie-consent').get(0).props.style.visibility).toEqual('hidden');
  });
  it('should have correct icon size', () => {
    const component = shallow(<CookieConsent closeIconSize={testIconSize}/>);
    expect(component.find('#cookie-consent-close').get(0).props.style.fontSize).toEqual(`${testIconSize}px`);
    expect(component.find('#cookie-consent-close').get(0).props.style.lineHeight).toEqual(`${testIconSize}px`);
    expect(component.find('#cookie-consent-close').get(0).props.style.width).toEqual(`${testIconSize}px`);
    expect(component.find('#cookie-consent-close').get(0).props.style.height).toEqual(`${testIconSize}px`);
  });
  it('should have center icon position', () => {
    const component = shallow(<CookieConsent
      closeIconSize={testIconSize}
      padding={testPadding}/>);
    expect(component.find('#cookie-consent-close').get(0).props.style.top).toEqual('50%');
    expect(component.find('#cookie-consent-close').get(0).props.style.right).toEqual(`${testPadding / 2}px`);
    expect(component.find('#cookie-consent-close').get(0).props.style.marginTop).toEqual(`${testIconSize / -2}px`);
  });
  it('should have top icon position', () => {
    const component = shallow(<CookieConsent
      closeIconPositionTop={true}
      closeIconSize={testIconSize}
      padding={testPadding}/>);
    expect(component.find('#cookie-consent-close').get(0).props.style.top).toEqual(`${testPadding / 2}px`);
    expect(component.find('#cookie-consent-close').get(0).props.style.marginTop).toEqual(0);
  });
  it('should have correct padding', () => {
    const component = shallow(<CookieConsent
      closeIconSize={testIconSize}
      padding={testPadding}/>);
    expect(component.find('#cookie-consent').get(0).props.style.padding).toEqual(`${testPadding}px`);
    expect(component.find('#cookie-consent').get(0).props.style.paddingRight).toEqual(`${testIconSize + testPadding}px`);
  });
  it('should have custom content', () => {
    const component = shallow(<CookieConsent>{testCustomContent}</CookieConsent>);
    expect(component.find('#cookie-consent').get(0).props.children[1]).toEqual(testCustomContent);
    expect(component.find('#cookie-consent-text').get(0)).toEqual(undefined);
  });
  it('should have a className', () => {
    const component = shallow(<CookieConsent className={testClassName}>
      {testCustomContent}
    </CookieConsent>);
    expect(component.find(`.${testClassName}`)).toExist();
  });
});
