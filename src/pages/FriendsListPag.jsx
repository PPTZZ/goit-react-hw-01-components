import Friends from '../components/Friends';
import style from '../css/pages/PageStyle.module.css';
import firends from '../data/friends.json';

import { Link } from 'react-router-dom';
const FriendsListPag = () => {
	return (
		<div className={style.pag}>
			<Link to='/' className='link'>
				Home
			</Link>
			<Friends friends={firends} />
		</div>
	);
};
export default FriendsListPag;
