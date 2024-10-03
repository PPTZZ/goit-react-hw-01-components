import { Link } from 'react-router-dom';
import data from '../data/data.json'
import Statistics from '../components/Statistics';
const StatisticsPag = () => {
	return (
		<div>
			<Link to='/' className='link'>Home</Link>
			<Statistics title='' data={data}/>
		</div>
	);
};
export default StatisticsPag;
