import React from 'react';
import ReactDOM from 'react-dom';
import { makeServer } from './mock';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';
import './index.css';

// Include application component.
import App from 'App';
makeServer({ environment: 'development' });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
