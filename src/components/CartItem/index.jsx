// Context:
import { useContext } from "react";
import AppContext from "../../context/AppContext";

// Format Currency:
import formatCurrency from "../../utils/formatCurrency";

// React Icons:
import { BsCartDashFill } from "react-icons/bs";

// CSS:
import "./styles.css";

// Recebendo uma prop data:
const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((cartItem) => {
      return cartItem.id !== id;
    });
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
