import Card from "../components/Card";
import { Link } from "react-router-dom";

function WomenPage({ collection }) {
  return (
    <div className="page">

      <Link to="/" className="back-btn">
        ← Home
      </Link>

      <h1>Women's Collection</h1>

      <div className="products">

        {collection.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}

      </div>

    </div>
  );
}

export default WomenPage;