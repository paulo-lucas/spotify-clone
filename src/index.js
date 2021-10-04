import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from 'theme/schema.json';
import { setToLS } from 'utils/storage';

setToLS('all-themes', themes.default);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
