import PropTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({ url, title, isOnline }) => {
  return (
    <li className={css.card}>
      <img src={url} alt={title} width={300} className={css.picture} />
      <div className={css.cardInfo}>
        <h5>{title} </h5>
        <p>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="111" className={`${css.cardLink} ${isOnline ? css.online : css.ofline}`}>
          conect
        </a>
      </div>
    </li>
  );
};

export default Card;

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
