function Card({ name, price, image, category }) {
  return (
    <div className="card">

      <img
        src={image}
        alt={name}
        className="card-image"
      />

      <div className="card-content">

        <span className="category">
          {category}
        </span>

        <h2>{name}</h2>

        <p className="price">
          PKR {price}
        </p>

      </div>

    </div>
  );
}

export default Card;