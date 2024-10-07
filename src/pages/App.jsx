
import { Link } from "react-router-dom";
import style from '../css/pages/App.module.css'
const App = () => {
	return (
    <div className={style.main}>
    <h1>hello world</h1>
      {/* <Link to="/profile" className={style.route}>Profile</Link>
      <Link to="/statistics" className={style.route}>Statistics</Link>
      <Link to="/friends" className={style.route}>Friends</Link>
      <Link to="/transactions" className={style.route}>Transactions</Link> */}
    </div>
	);
};
export default App;
