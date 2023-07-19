const Card = ({ id, url, title }) => {
  return (
    <li>
      <div key={id} className="card mx-auto my-5" style={{ width: '18rem' }}>
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <a href="111" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </li>
  );
};

export default Card;
