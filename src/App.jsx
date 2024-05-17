// Components:
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";

import Provider from "./context/Provider";

const App = () => {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
};

export default App;
