import PropTypes from 'prop-types';
import style from '../css/components/Friends.module.css'

const Friends = ({ friends }) => {
	const friendList = friends.map((friend) => {
		const { id, avatar,isOnline, name } = friend;
		return (
			<li className={style.item} key={id}>
				{isOnline? <span className={style.online}></span> :<span className={style.offline}></span>}
				<img className={style.avatar} src={avatar} alt='User avatar' width='48' />
				<p className={style.name}>{name}</p>
			</li>
		);
	});
	return (
		<>
			<ul className={style.friendList}>{friendList}</ul>
		</>
	);
};

Friends.propTypes = {
	friends: PropTypes.array.isRequired,
};
export default Friends;
