// Context:
import { useContext } from "react";
import AppContext from "../../context/AppContext";

// React Icons:
import { AiOutlineShoppingCart } from "react-icons/ai";

// CSS:
import "./styles.css";

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className={cartItems.length > 0 ? "cart__button items" : "cart__button"}
      data-counter={cartItems.length}
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
    </button>
  );
};

export default CartButton;
