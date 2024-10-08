import PropTypes from 'prop-types';
import styles from "../css/components/Profile.module.css"

const Profile = ({ username, avatar, location, tag, stats }) => {
	const { followers, views, likes } = stats;
	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img src={avatar} alt='User avatar' className={styles.avatar}/>
				<p className={styles.name}>{username}</p>
				<p className={styles.tag}>@{tag}</p>
				<p className={styles.location}>{location}</p>
			</div>
			<ul className={styles.stats}>
				<li>
					<span className={styles.label}>Followers</span>
					<span className={styles.quantity}>{followers}</span>
				</li>
				<li>
					<span className={styles.label}>Views</span>
					<span className={styles.quantity}>{views}</span>
				</li>
				<li>
					<span className={styles.label}>Likes</span>
					<span className={styles.quantity}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.propTypes= {
	avatar: PropTypes.string,
	username: PropTypes.string.isRequired,
	location: PropTypes.string,
	tag: PropTypes.any.isRequired,
	stats: PropTypes.object.isRequired,
};

export default Profile;
