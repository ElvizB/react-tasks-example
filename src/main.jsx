import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TaskContenxtProvider } from './context/TaskContenxt';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TaskContenxtProvider>
			<App />
		</TaskContenxtProvider>
	</React.StrictMode>
);
