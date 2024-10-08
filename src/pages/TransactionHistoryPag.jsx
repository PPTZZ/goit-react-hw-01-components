import { Link } from 'react-router-dom';
import Transactions from '../components/Transactions';
import transactions from '../data/transactions.json'
import style from '../css/pages/PageStyle.module.css'

const TransactionHistoryPag = () => {
	return (
		<div className={style.pag}>
			<Link to='/' className='link'>Home</Link>
			<Transactions transactions={transactions}/>
		</div>
	);
};


export default TransactionHistoryPag;
