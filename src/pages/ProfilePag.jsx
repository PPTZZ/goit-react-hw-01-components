import { Link } from 'react-router-dom';
import user from '../data/user.json';
import style from '../css/pages/ProfilePag.module.css'
import Profile from '../components/Profile';
const ProfilePag = () => {
	const { username, tag, location, avatar, stats } = user;
	return (
		<div className={style.page}>
			<Link to='/' className='link'>Home</Link>
			<Profile
				username={username}
				tag={tag}
				location={location}
				avatar={avatar}
				stats={stats}
			/>
		</div>
	);
};
export default ProfilePag;
