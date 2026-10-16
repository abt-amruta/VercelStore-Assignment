import { CartPovider } from "../../../context/CartContext";
import { useContext } from "react";

const Filter = () => {
  const { products, setProducts } = useContext(CartPovider);

  const HighToLow = () => {
    const priceHighToLow = [...products].sort((a, b) => a.price - b.price);
    setProducts(priceHighToLow);
  };

  const LowToHigh = () => {
    const priceHighToLow = [...products].sort((a, b) => b.price - a.price);
    setProducts(priceHighToLow);
  };

  //   const ByRating = () => {
  //     const priceHighToLow = [...products].sort((a, b) => a[6].rate - b[6].rate);
  //     setProducts(priceHighToLow);
  //   };
  return (
    <div>
      <div className="filter-section">
        <p className="text-zinc-500 py-1 text-sm">sort by</p>
        {/* <button className="filter-button" onClick={ByRating}>
          Relevant
        </button> */}
        <div className="text-white flex flex-col">
          <button
            className="filter-button border-b border-black py-1 hover:border-b hover:border-white"
            onClick={HighToLow}
          >
            High to Low
          </button>
          <button
            className="filter-button border-b border-black py-1 hover:border-b hover:border-white"
            onClick={LowToHigh}
          >
            Low to High
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
