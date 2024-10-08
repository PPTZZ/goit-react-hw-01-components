import PropTypes from 'prop-types';
import style from '../css/components/Transactions.module.css'
const Transactions = ({ transactions }) => {
	const transactionList = transactions.map((transaction) => {
        const { id, type, amount, currency } = transaction;
		return (
			<tr key={id} className='tr'>
				<td>{type}</td>
				<td>{amount}</td>
				<td>{currency}</td>
			</tr>
		);
	});
	return (
		<>
			<table className={style.transactionHistory}>
				<thead>
					<tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Currency</th>
					</tr>
				</thead>

				<tbody>
					{transactionList}
				</tbody>
			</table>
		</>
	);
};

Transactions.propTypes = {
	transactions: PropTypes.array.isRequired,
};
export default Transactions;
