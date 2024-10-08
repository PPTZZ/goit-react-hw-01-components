
import { Link } from 'react-router-dom';
import data from '../data/data.json'
import Statistics from '../components/Statistics';
import style from '../css/pages/PageStyle.module.css'
const StatisticsPag = () => {
		return (
		<div className={style.pag}>
			<Link to='/' className='link'>Home</Link>
			<Statistics title='Upload stats' stats={data}/>
			<Statistics  stats={data}/>
		</div>
	);
};
export default StatisticsPag;
