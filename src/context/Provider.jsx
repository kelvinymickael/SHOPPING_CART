import { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  // Criando um estado para salvar os produtos:
  const [products, setProducts] = useState([]); // Esse valor que a gente passou aqui vai ser o valor inicial que o nosso estado vai ter.
  const [cartItems, setCartItems] = useState([]);
  // Criando um estado de loading:
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    loading,
    setLoading,
    isCartVisible,
    setIsCartVisible,
  };

  // Através da prop (children) vamos pegar os componentes filhos do nosso componente (Provider):
  // Aqui dentro desse componente vamos utilizar o contexto que a gente criou:
  // Esse (Provider) é responsável por fornecer os dados para os componentes:
  // Os componentes que estiverem dentro do (Provider) vão ter acesso aos dados do meu (Provider):
  // Para prover/fornecer os dados para os componentes vamos utilizar uma prop chamada de (value):
  // Com isso, todos os componentes que forem filhos do meu (Provider) irão ter acesso ao valor que eu passei na prop (value):

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;
