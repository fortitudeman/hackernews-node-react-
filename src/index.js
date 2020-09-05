import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import App from './Components/App';
import GlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  const store = configureStore({});
  ReactDOM.render(
    <Provider store={store}>
      <center>
      <GlobalStyles />
      <App />
    </center>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();

serviceWorker.unregister();
