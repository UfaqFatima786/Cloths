import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";

const menCollection = [
  {
    id: 1,
    name: "Classic Black Shirt",
    price: 2500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NzXtwP71yKZJGu3TTdpSyFhKPaATk1b7YXXXJZMOTA&s=10",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 4500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67zTG32XFrEHG3ZNZOGPv44BNBzhvIQQfZqKYA1wnKA&s=10",
    category: "Jackets",
  },
  {
    id: 3,
    name: "Men's Casual T-Shirt",
    price: 1800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLKUSh-0u8Hyj-pKTvunSFk_defjIPVSR8PaVDJuUJA&s=10",
    category: "T-Shirts",
  },
  
  {
    id: 4,
    name: "Formal White Shirt",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    category: "Shirts",
  },
  {
    id: 5,
    name: "Classic Blue Jeans",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    category: "Jeans",
  },
  {
    id: 6,
    name: "Men's Polo Shirt",
    price: 2200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDECpjti3LeY9ImD2dW3A6m8lkX2SJ6PpBKDytL-auw&s=10",
    category: "Polo",
  },
  {
    id: 7,
    name: "Brown Casual Blazer",
    price: 5500,
    image:
      "https://www.ismailfarid.com/cdn/shop/files/JKT319_1_533x.jpg?v=1763624597",
    category: "Blazers",
  },
  {
    id: 8,
    name: "Comfortable Cotton Hoodie",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    category: "Hoodies",
  },
  {
    id: 9,
    name: "Modern Men's Outfit",
    price: 4800,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=600&q=80",
    category: "Casual Wear",
  },
];

const womenCollection = [
  {
    id: 1,
    name: "Elegant White Dress",
    price: 5500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQQfdLv-SMc-5ATCSE0btAK6EveOpvizAFla3idP-kw&s=10",
    category: "Dresses",
  },
  {
    id: 2,
    name: "Women's Casual Top",
    price: 2800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk67OfDvF_ZacF0l5eNz-AnN9gf_AzNjBJuEEXz2ukg&s",
    category: "Tops",
  },
  {
    id: 3,
    name: "Classic Women's Jacket",
    price: 4800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pUFbHUi8s8g7GAwhQOB_2aYrenUC49ODv3cSLEQAtw&s=10",
    category: "Jackets",
  },
   {
    id: 4,
    name: "Floral Summer Dress",
    price: 4200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwK5sl3SyimEeeP2sP5bcmYxb7HSMhzpS0kFolhNuLeQ&s=10",
    category: "Dresses",
  },
  {
    id: 5,
    name: "Women's Denim Jeans",
    price: 3500,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    category: "Jeans",
  },
  {
    id: 6,
    name: "Elegant Pink Frok",
    price: 3200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQGmvjCt5mF0rA5U4x1n9ofmVBeLxizMoCl7gTJH5cw&s",
    category: "Blouses",
  },
  {
    id: 7,
    name: "Women's Casual Hoodie",
    price: 3000,
    image:"https://www.acecart.pk/cdn/shop/files/c779eb411981fa33179e62d7e5af08e9.jpg?v=1713572632",
    category: "Hoodies",
  },
  {
    id: 8,
    name: "Stylish Women's Coat",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=600&q=80",
    category: "Coats",
  },
  {
    id: 9,
    name: "Modern Women's Outfit",
    price: 5800,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    category: "Casual Wear",
  },
  
];
function Home() {
  return (
    <div className="home">

      {}
      <section className="hero-section">

        <div className="hero-content">
          <p className="hero-small">NEW SEASON • NEW STYLE</p>

          <h1>
            Discover Your
            <span> Perfect Style</span>
          </h1>

          <p className="hero-description">
            Explore our carefully selected fashion collections designed
            to bring comfort, confidence, and timeless style to your wardrobe.
          </p>

          <div className="home-buttons">
            <Link to="/men" className="home-btn">
              Shop Men
            </Link>

            <Link to="/women" className="home-btn secondary-btn">
              Shop Women
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
            alt="Fashion Collection"
          />

          <div className="hero-card">
            <span>Featured</span>
            <h3>Everyday Elegance</h3>
            <p>Style that feels like you.</p>
          </div>
        </div>

      </section>
      {}
      <section className="collection-section">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTIONS</p>
          <h2>Find Your Style</h2>
          <span>
            Discover fashion pieces made for every mood and every moment.
          </span>
        </div>

        <div className="collection-boxes">

          <div className="collection-box men-box">
            <div className="collection-overlay">
              <p>FOR HIM</p>
              <h2>Men's Collection</h2>
              <span>Classic styles & modern essentials</span>

              <Link to="/men" className="collection-btn">
                Explore Men →
              </Link>
            </div>
          </div>

          <div className="collection-box women-box">
            <div className="collection-overlay">
              <p>FOR HER</p>
              <h2>Women's Collection</h2>
              <span>Elegant styles & timeless fashion</span>

              <Link to="/women" className="collection-btn">
                Explore Women →
              </Link>
            </div>
          </div>

        </div>

      </section>


      {}
      <section className="story-section">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"
            alt="Our Fashion Story"
          />
        </div>

        <div className="story-content">

          <p className="story-label">OUR STORY</p>

          <h2>
            Fashion That
            <span> Feels Like You</span>
          </h2>

          <p>
            We believe fashion is more than just clothing. It is a way to
            express your personality, your confidence, and your individuality.
          </p>

          <p>
            Our collection brings together carefully selected styles that
            balance comfort, quality, and modern design. From everyday
            essentials to statement pieces, we want every item to become
            a part of your personal story.
          </p>

          <div className="story-points">

            <div>
              <strong>01</strong>
              <span>Quality Styles</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Modern Designs</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Everyday Comfort</span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="features-section">

        <div className="section-heading">
          <p>WHY CHOOSE US</p>
          <h2>Made For Your Lifestyle</h2>
        </div>

        <div className="features">

          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <h3>Quality Fashion</h3>
            <p>
              Carefully selected products with style, comfort and quality
              in mind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♡</div>
            <h3>Timeless Style</h3>
            <p>
              Fashion pieces that help you create looks that never go out
              of style.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✧</div>
            <h3>For Everyone</h3>
            <p>
              Explore our collections designed for both men and women.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="cta-section">
        <p>YOUR STYLE. YOUR STORY.</p>
        <h2>
          Ready To Refresh
          <br />
          Your Wardrobe?
        </h2>
        <p>
          Explore our latest collections and find something made for you.
        </p>
        <div className="home-buttons">
          <Link to="/men" className="home-btn">
            Shop Men's
          </Link>
          <Link to="/women" className="home-btn">
            Shop Women's
          </Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/men"
          element={<MenPage collection={menCollection} />}
        />

        <Route
          path="/women"
          element={<WomenPage collection={womenCollection} />}
        />

      </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;