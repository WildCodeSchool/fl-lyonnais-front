import React from 'react';

class Chat extends React.Component {
  componentDidMount () {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '9ecb7d96-def1-4105-bdf4-d08f78940992';
    (function () {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }

  render () { return (<></>); }
}

export default Chat;
