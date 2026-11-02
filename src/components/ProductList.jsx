import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "./ProductList.css";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 450,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 199,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 8,
    name: "Jade Plant",
    category: "Succulents",
    price: 249,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 179,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 220,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 11,
    name: "String of Pearls",
    category: "Succulents",
    price: 299,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400"
  },
  {
    id: 12,
    name: "Cactus",
    category: "Succulents",
    price: 150,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  },
  {
    id: 14,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 15,
    name: "Orchid",
    category: "Flowering Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 16,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 249,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400"
  },
  {
    id: 17,
    name: "Bougainvillea",
    category: "Flowering Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 18,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  }
];


function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants"
  ];

  function handleAddToCart(plant) {
    dispatch(addToCart(plant));
  }

  return (
    <div className="products-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <header className="products-header">
        <h1>Our Beautiful Plants</h1>
        <p>Bring freshness and happiness into your home.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>

          <h2>{category}</h2>

          <div className="plant-grid">

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {

                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>

                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p className="plant-price">
                      ₹{plant.price}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                  </div>
                );
              })}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;
