import React from 'react';
import { IntlProvider } from 'react-intl';

export class HelloWorld extends React.Component {
  render() {
    let messages = {};
    return <IntlProvider locale="en" messages={messages}><h1>Hello World</h1></IntlProvider>;
  }
}
