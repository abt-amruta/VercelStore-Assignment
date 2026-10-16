import { useContext, useEffect } from "react";
import api from "../../api/axios";
import { CartPovider } from "../../context/CartContext";
import Products from "../../components/products/Products";
import Filter from "../../components/sidebar/filters/Filter";
import Collection from "../../components/sidebar/collection/Collection";
import MyCart from "../../components/mycart/MyCart";

const Home = () => {
  const { products, setProducts, loading, setLoading, showCart, setShowCart } =
    useContext(CartPovider);

  useEffect(() => {
    setLoading(true);
    api.get("/products").then((data) => {
      setProducts(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className="home-section bg-zinc-900 flex mx-30 justify-center"
          onClick={() => setShowCart(false)}
        >
          <Collection />
          <div className="product-section flex justify-center">
            {loading ? <p>Loading...</p> : <Products products={products} />}
          </div>
          <Filter />
        </div>
        <div className="absolute w-90 right-0 inset-y-0 ">
          {showCart && (
            <div className="cart absolute z-40">
              <MyCart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
