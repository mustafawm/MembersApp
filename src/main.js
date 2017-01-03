import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './routes';

window.React = React;

ReactDOM.render(
	<AppRoutes />, document.getElementById('app')
);
