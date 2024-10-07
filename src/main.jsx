import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TransactionHistoryPag from './pages/TransactionHistoryPag';
import StatisticsPag from './pages/StatisticsPag';
import ProfilePag from './pages/ProfilePag';
import FriendsListPag from './pages/FriendsListPag';
import App from './pages/App';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HashRouter>
			<Routes>
				<Route index path='/' element={<App />} />
				<Route path='/profile' element={<ProfilePag />} />
				<Route path='/friends' element={<FriendsListPag />} />
				<Route path='/statistics' element={<StatisticsPag />} />
				<Route path='/transactions' element={<TransactionHistoryPag />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);
