import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

import Controller from './screens/Controller';

ReactDOM.render(<Controller  />, document.getElementById('root'));

serviceWorker.unregister();
