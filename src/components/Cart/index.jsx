// Context:
import { useContext } from "react";
import AppContext from "../../context/AppContext";

// Function to format currency:
import formatCurrency from "../../utils/formatCurrency";

// Components:
import CartItem from "../CartItem";

// CSS:
import "./styles.css";

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className={isCartVisible ? "cart cart-active" : "cart"}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, "BRL")}</div>
    </section>
  );
};

export default Cart;
