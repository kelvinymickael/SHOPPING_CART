// Context:
import { useContext } from "react";
import AppContext from "../../context/AppContext";

// Function to format currency:
import formatCurrency from "../../utils/formatCurrency";

// PropTypes:
import propTypes from "prop-types";

// React Icons:
import { BsFillCartPlusFill } from "react-icons/bs";

// CSS:
import "./styles.css";
import CartItem from "../CartItem";
import { CgArrowLongRight } from "react-icons/cg";

const ProductCard = ({ data }) => {
  const { thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    /* const updatedCartItems = cartItems;
    updatedCartItems.push(...cartItems, data); */

    // Passando para a função (setCartItems) o array atualizado, com os items que já estão no carrinho e com os novos items que forem sendo adicionados ao carrinho:
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card-image"
      />

      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button" className="button-addCart" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
