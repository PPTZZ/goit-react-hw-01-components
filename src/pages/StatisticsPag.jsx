
import { Link } from 'react-router-dom';
import data from '../data/data.json'
import Statistics from '../components/Statistics';
import style from '../css/pages/StatisticsPag.module.css'
const StatisticsPag = () => {
		return (
		<div className={style.statsPag}>
			<Link to='/' className='link'>Home</Link>
			<Statistics title='' stats={data}/>
		</div>
	);
};
export default StatisticsPag;
