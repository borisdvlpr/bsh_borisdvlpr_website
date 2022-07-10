import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import App from './App';

import './index.css';

const container = document.getElementById('root');
container.innerHTML = renderToString(<App />);

ReactDOMClient.hydrateRoot(
	container,
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
