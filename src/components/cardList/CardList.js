import Card from 'components/card';
import PropTypes from 'prop-types';

const CardList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(item => (
        <Card key={item.id} id={item.id} title={item.title} url={item.url}></Card>
      ))}
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};
