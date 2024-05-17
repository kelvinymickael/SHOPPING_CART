// Hooks:
import { useEffect, useContext } from "react";

// Components:
import ProductCard from "../ProductCard";
import Loading from "../Loading";

// Context:
import AppContext from "../../context/AppContext";

// Data Products:
import fetchProducts from "../../api/fetchProducts";

// CSS:
import "./styles.css";

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    const fetchAllPrdocuts = async () => {
      const data = await fetchProducts("escrivaninha gamer");
      setProducts(data); // Salvando os dados no estado do nosso componente.
    };

    fetchAllPrdocuts();

    setLoading(false);
  }, []);

  return (
    <>
      {(loading && <Loading />) || (
        <section className="products container">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </section>
      )}
    </>
  );
};
export default Products;
