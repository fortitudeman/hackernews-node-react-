import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import GlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <center>
      <GlobalStyles />
      <App />
    </center>,
    document.getElementById('root')
  );
};

renderApp();

serviceWorker.unregister();
