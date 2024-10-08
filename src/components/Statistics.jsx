import PropTypes from 'prop-types';
import statStyle from '../css/components/Statistics.module.css';

const setRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(data => {
    return (
      <li
        className={statStyle.item}
        key={data.id}
        style={{ backgroundColor: setRandomHexColor() }}>
        <span>{data.label}</span>
        <span>{data.percentage}%</span>
      </li>
    );
  });

  return (
    <>
      <section className={statStyle.statistics}>
        <h2 className={statStyle.title}>{title}</h2>
        <ul className={statStyle.statList}>{statsItems}</ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
