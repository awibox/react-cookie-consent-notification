import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalStorage } from 'combo-storage';

const CookieConsentStyle = {
  position: 'fixed',
  right: 0,
  left: 0,
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)',
  zIndex: 900,
};

const CookieConsentCloseStyle = {
  textAlign: 'center',
  position: 'absolute',
  transform: 'rotate(45deg)',
  cursor: 'pointer',
  fontFamily: '-webkit-pictograph',
};

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      hasStorage: LocalStorage.get('react-cookie-consent-notification'),
    };
    this.closeConsent = this.closeConsent.bind(this);
  }

  static propTypes = {
    background: PropTypes.string,
    bottomPosition: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    closeIconSize: PropTypes.number,
    closeIconPositionTop: PropTypes.bool,
    padding: PropTypes.number,
  };

  static defaultProps = {
    background: '#fff',
    bottomPosition: false,
    color: '#000',
    closeIconSize: 28,
    closeIconPositionTop: false,
    padding: 20,
  };

  closeConsent() {
    this.setState({ close: true });
    LocalStorage.set('react-cookie-consent-notification', true);
    if (!this.props.bottomPosition) {
      document.body.style.marginTop = 0;
    }
  }

  componentDidMount() {
    if (!this.state.hasStorage && !this.props.bottomPosition) {
      const consent = document.getElementById('cookie-consent').offsetHeight;
      document.body.style.marginTop = `${consent}px`;
    }
  }

  render() {
    if (this.state.hasStorage) {
      return null;
    }
    const {
      background,
      bottomPosition,
      children,
      className,
      color,
      closeIconSize,
      closeIconPositionTop,
      padding,
    } = this.props;
    const closeConsent = this.state.close;
    const positionObj = bottomPosition ? { bottom: 0 } : { top: 0 };
    const styleForCookieConsent = {
      visibility: closeConsent ? 'hidden' : 'visible',
      backgroundColor: background,
      padding: `${padding}px`,
      paddingRight: `${closeIconSize + padding}px`,
      color,
      ...positionObj,
      ...CookieConsentStyle,
    };
    const styleForCloseButton = {
      lineHeight: `${closeIconSize}px`,
      width: `${closeIconSize}px`,
      height: `${closeIconSize}px`,
      fontSize: `${closeIconSize}px`,
      marginTop: closeIconPositionTop ? 0 : `${closeIconSize / -2}px`,
      right: `${padding / 2}px`,
      top: closeIconPositionTop ? `${padding / 2}px` : '50%',
      ...CookieConsentCloseStyle,
    };
    return (
      <div id='cookie-consent' className={className} style={className ? {} : styleForCookieConsent}>
        <div id='cookie-consent-close' onClick={this.closeConsent} style={styleForCloseButton}>+</div>
        {children}
      </div>
    );
  }
}
export default CookieConsent;
