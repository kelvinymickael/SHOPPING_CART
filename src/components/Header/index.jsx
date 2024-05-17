// Components:
import SearchBar from "../SearchBar";
import CartButton from "../CartButton";

// CSS:
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />

        <CartButton />
      </div>
    </header>
  );
};

export default Header;
