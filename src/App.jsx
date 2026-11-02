
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <div className="landing-page">

      <nav className="landing-navbar">
        <h2>Paradise Nursery</h2>
        <Link to="/about">About Us</Link>
      </nav>

      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Home</h2>

        <p>
          Discover beautiful indoor plants and transform
          your living space into a green paradise.
        </p>

        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>

    </div>
  );
}

function Cart() {
  return <CartItem />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
