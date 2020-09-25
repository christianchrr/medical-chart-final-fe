import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//  service worker seems to come standard with react
import StoreAction from './Store'
//  why do we call reducer in INdex

ReactDOM.render(
  <React.StrictMode>
    <StoreAction> {/* Context.provider, passes 'state' and 'dispatch' down to App */ }
      <App /> {/* App is 'children' of Context.Provider */}
    </StoreAction>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
