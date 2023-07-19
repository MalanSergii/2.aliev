import CardList from 'components/cardList';
import data from 'data/photoList.json';
const App = () => {
  return (
    <>
      <CardList data={data}></CardList>
    </>
  );
};

export default App;
