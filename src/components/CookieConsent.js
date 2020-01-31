import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalStorage } from 'combo-storage';

const CookieConsentStyle = {
  position: 'fixed',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  right: 0,
  left: 0,
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)',
  zIndex: 900,
};

const CookieConsentButtonStyle = {
  borderRadius: '3px',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
};

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      hasStorage: !!LocalStorage.get('react-cookie-consent-notification'),
    };
    this.consentAction = this.consentAction.bind(this);
  }

  static propTypes = {
    background: PropTypes.string,
    bottomPosition: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonBackground: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonFontSize: PropTypes.number,
    buttonClassName: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    consentFunction: PropTypes.func,
    padding: PropTypes.number,
  };

  static defaultProps = {
    background: '#fff',
    bottomPosition: false,
    buttonText: 'I agree',
    buttonBackground: '#fff',
    buttonColor: '#000',
    buttonFontSize: 16,
    children: 'This website uses cookies to improve service, for analytical and advertising purposes.',
    color: '#000',
    consentFunction: () => {},
    padding: 20,
  };

  consentAction() {
    this.setState({ close: true });
    LocalStorage.set('react-cookie-consent-notification', true);
    if (!this.props.bottomPosition) {
      document.body.style.marginTop = 0;
    }
    this.props.consentFunction(true);
  }

  componentDidMount() {
    if (!this.state.hasStorage && !this.props.bottomPosition) {
      const consent = document.getElementById('cookie-consent').offsetHeight;
      document.body.style.marginTop = `${consent}px`;
    }
    this.props.consentFunction(this.state.hasStorage);
  }

  render() {
    if (this.state.hasStorage) {
      return null;
    }
    const {
      background,
      bottomPosition,
      buttonText,
      buttonBackground,
      buttonColor,
      buttonFontSize,
      buttonClassName,
      children,
      className,
      color,
      padding,
    } = this.props;
    const consentAction = this.state.close;
    const positionObj = bottomPosition ? { bottom: 0 } : { top: 0 };
    const styleForCookieConsent = {
      visibility: consentAction ? 'hidden' : 'visible',
      backgroundColor: background,
      padding: `${padding / 2}px`,
      color,
      ...positionObj,
      ...CookieConsentStyle,
    };
    const styleForCloseButton = {
      backgroundColor: buttonBackground,
      color: buttonColor,
      height: `${buttonFontSize}px`,
      lineHeight: `${buttonFontSize}px`,
      fontSize: `${buttonFontSize}px`,
      margin: `0 ${padding / 2}px`,
      padding: `${padding / 2}px ${padding}px`,
      ...CookieConsentButtonStyle,
    };
    return (
      <div id='cookie-consent' className={className} style={className ? {} : styleForCookieConsent}>
        <div style={{ padding: `${padding / 2}px` }}>{children}</div>
        <div id='cookie-consent-button'
             onClick={this.consentAction}
             className={buttonClassName}
             style={buttonClassName ? {} : styleForCloseButton}>{buttonText}</div>
      </div>
    );
  }
}
export default CookieConsent;
