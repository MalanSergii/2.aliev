import Card from 'components/card'
import PropTypes from 'prop-types'
import css from './CardList.module.css'

const CardList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
          isOnline={item.isOnline}
        ></Card>
      ))}
    </ul>
  )
}

export default CardList

CardList.propTypes = {
  data: PropTypes.array,
}
