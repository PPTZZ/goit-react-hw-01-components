import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransactionHistoryPag from './pages/TransactionHistoryPag';
import StatisticsPag from './pages/StatisticsPag';
import ProfilePag from './pages/ProfilePag';
import FriendsListPag from './pages/FriendsListPag';
import App from './pages/App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<App />} />
				<Route path='profile' element={<ProfilePag />} />
				<Route path='friends' element={<FriendsListPag />} />
				<Route path='statistics' element={<StatisticsPag />} />
				<Route path='transactions' element={<TransactionHistoryPag />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
