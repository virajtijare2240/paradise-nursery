
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../redux/CartSlice";

import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({totalItems})</Link>
        </div>
      </nav>

      <div className="cart-container">

        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (

          <div className="empty-cart">
            <h2>Your cart is empty!</h2>

            <p>
              Looks like you haven't added any plants yet.
            </p>

            <Link to="/plants" className="continue-btn">
              Continue Shopping
            </Link>
          </div>

        ) : (

          <>
            <div className="cart-items">

              {cartItems.map((item) => (

                <div className="cart-card" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-details">

                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <p>
                      Total: ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <p>
                Total Items: {totalItems}
              </p>

              <h3>
                Total Amount: ₹{totalAmount}
              </h3>

              <button
                className="checkout-btn"
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>

              <button
                className="clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

              <Link
                to="/plants"
                className="continue-btn"
              >
                Continue Shopping
              </Link>

            </div>
          </>

        )}

      </div>

    </div>
  );
}

export default CartItem;
