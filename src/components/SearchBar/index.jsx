// Hooks:
import { useState, useContext } from "react";

// Context:
import AppContext from "../../context/AppContext";

// Data Products:
import fetchProducts from "../../api/fetchProducts";

// React Icons:
import { BiSearch } from "react-icons/bi";

// CSS:
import "./styles.css";

const SearchBar = () => {
  // A função (setSearchValue) atualiza o valor do nosso estado (searchValue):
  const [searchValue, setSearchValue] = useState("");

  const { setProducts, setLoading } = useContext(AppContext);

  // Quando o formulário for enviado essa função será executada:
  // No parâmetro (e) é onde vamos recuperar as informações do evento:
  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    const receiveProducts = await fetchProducts(searchValue);

    // Atualizando o estado dos produtos:
    setProducts(receiveProducts);

    setLoading(false);

    setSearchValue("");
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos..."
        className="search__input"
        required
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button type="submit" className="search__button">
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
