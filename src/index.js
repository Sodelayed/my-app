import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoWithJSONServer } from './TodoWithJSONServer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<TodoWithJSONServer />
	</React.StrictMode>,
);
