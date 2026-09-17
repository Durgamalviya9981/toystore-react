
import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Cute Teddy Bear",
    price: 499,
    category: "Soft Toys",
    emoji: "🧸",
  },
  {
    id: 2,
    name: "Toy Racing Car",
    price: 299,
    category: "Vehicles",
    emoji: "🚗",
  },
  {
    id: 3,
    name: "Building Blocks",
    price: 599,
    category: "Learning",
    emoji: "🧱",
  },
  {
    id: 4,
    name: "Toy Robot",
    price: 799,
    category: "Electronic",
    emoji: "🤖",
  },
  {
    id: 5,
    name: "Colorful Ball",
    price: 199,
    category: "Outdoor",
    emoji: "⚽",
  },
  {
    id: 6,
    name: "Toy Train",
    price: 449,
    category: "Vehicles",
    emoji: "🚂",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <h1>🧸 ToyStore</h1>

        <input
          type="text"
          placeholder="Search toys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart">
          🛒 Cart ({cart.length})
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="tagline">PLAY. LEARN. IMAGINE.</p>
          <h2>Discover Amazing Toys!</h2>
          <p>
            Find fun and exciting toys for every child.
          </p>
          <a href="#products" className="shop-button">
            Shop Now
          </a>
        </div>

        <div className="hero-toy">🧸🚗🧩</div>
      </section>

      <section className="products-section" id="products">
        <h2>Popular Toys</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="toy-image">{product.emoji}</div>

              <p className="category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">No toys found.</p>
        )}
      </section>

      <footer>
        <p>© 2026 ToyStore. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
