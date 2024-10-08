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
		<BrowserRouter basename='/goit-react-hw-01-components'>
			<Routes>
				<Route index path='/goit-react-hw-01-components' element={<App />} />
				<Route path='/profile' element={<ProfilePag />} />
				<Route path='/statistics' element={<StatisticsPag />} />
				<Route path='/friends' element={<FriendsListPag />} />
				<Route path='/transactions' element={<TransactionHistoryPag />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
