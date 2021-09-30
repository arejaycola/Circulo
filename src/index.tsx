import React from 'react';
import ReactDOM from 'react-dom';
import StatusChecker from './components/StatusChecker/StatusChecker';

import './styles/style.scss';

ReactDOM.render(
	<React.StrictMode>
		<StatusChecker />
	</React.StrictMode>,
	document.getElementById('root')
);

