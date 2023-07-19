import data from 'data/photoList.json';
import Card from '../card/Card';

const CardList = () => {
  return (
    <ul>
      {data.map(item => (
        <Card key={item.id} id={item.id} title={item.title} url={item.url}></Card>
      ))}
    </ul>
  );
};

export default CardList;
