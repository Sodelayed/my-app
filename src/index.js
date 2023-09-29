import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppWithYup } from './AppWithYup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<AppWithYup />
	</React.StrictMode>,
);
