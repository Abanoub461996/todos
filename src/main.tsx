import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Redux
// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
				<App />
		</QueryClientProvider>
	</React.StrictMode>,
);
