import React from 'react';
import { render } from 'react-dom';

import App from './App';

require('./style/main.scss');

render(<App />, document.getElementById('app'));
