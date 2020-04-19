<div align="center">

![react-cookie-consent-notification](https://repository-images.githubusercontent.com/237075259/34f60700-43b2-11ea-9327-71de40c3f917)

[![Version](https://img.shields.io/npm/v/react-cookie-consent-notification)](https://www.npmjs.com/package/react-cookie-consent-notification)
[![Build](https://travis-ci.org/awibox/react-cookie-consent-notification.svg?branch=master)](https://travis-ci.org/awibox/react-cookie-consent-notification)
[![Coverage](https://coveralls.io/repos/github/awibox/react-cookie-consent-notification/badge.svg?branch=master)](https://coveralls.io/github/awibox/react-cookie-consent-notification?branch=master)
[![Minified size](https://img.shields.io/bundlephobia/min/react-cookie-consent-notification)](https://github.com/awibox/react-cookie-consent-notification/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/react-cookie-consent-notification)](https://www.npmjs.com/package/react-cookie-consent-notification)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=awibox/react-cookie-consent-notification)](https://dependabot.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/awibox/react-cookie-consent-notification/pulls)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [The settings of the component](#settings)
* [Custom styles](#styles)
* [Example](#example)
* [Contributing](#contributing)

<a name="installation"></a>
## Installation
You need to install package:
```bash
npm install react-cookie-consent-notification
```
You can use yarn:
```bash
yarn add react-cookie-consent-notification
```
<a name="gettingstarted"></a>
## Getting started
You should import the component:
```js
import CookieConsent from 'react-cookie-consent-notification';
```
Then use the component in your application. You should call the component as follows:
```typescript jsx
<CookieConsent background={'#000'} color={'#fff'}>JSX custom content</CookieConsent>
```

<a name="settings"></a>
## The settings of the component
|Parameter|Type|Description|Default|
|--------------------|--------|-----------|-------|
|**background**|string|Sets the notification background color in any format that supports css|``` #fff ```|
|**bottomPosition**|boolean|By default notification is displayed at the top of the page. If set to ```true```, the notification will be displayed at the bottom|``` false ```|
|**buttonText**|string|Sets the button text |```I agree```|
|**buttonBackground**|string|Sets the button background color in any format that supports css|``` #fff ```|
|**buttonColor**|string|Sets the button text color|``` #000 ```|
|**buttonFontSize**|string|Sets the button font size|```16```|
|**color**|string|Sets the text color|``` #000 ```|
|**consentFunction**|function|Sets function to track the status of consent|```() => {}```|
|**padding**|number|Sets padding for consent cookie notification|``` 20 ```|

<a name="styles"></a>
## Custom styles
You can also add custom styles by passing the ```className``` parameter:
```typescript jsx
<CookieConsent className={styles.CookieConsent} buttonClassName={styles.btn}>Your content</CookieConsent>
```

<a name="example"></a>
## Example
```typescript jsx
import CookieConsent from 'react-cookie-consent-notification';

const checkStatus = (status) => {
  if(status) {
    // To set a cookies
  }
};

const App = () => (
  <div className="app">
    ...
    <CookieConsent 
      background={'#000'}
      bottomPosition={false}
      buttonText={'I agree'}
      buttonBackground={'#fff'}
      buttonColor={'#000'}
      buttonFontSize={16}
      color={'#fff'}
      consentFunction={checkStatus}
      padding={20}
    >
      This website uses cookies to improve service, for analytical and advertising purposes.
      Please read our <a href={'/cookies'} style={{ color: '#fff' }}>Cookie Policy</a>.
      Confirm your consent to the use of cookies.
    </CookieConsent>
  </div>
);
export default App;
```

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
