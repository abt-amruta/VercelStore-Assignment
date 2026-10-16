import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartPovider } from "../../context/CartContext";

const Card = ({ product }) => {
  const { setCurrent } = useContext(CartPovider);

  return (
    <>
      <Link to={`/products/${product.id}`} onClick={() => setCurrent(product)}>
      
        <div
          className="card-section inset-4 min-h-100 w-95 p-10 mx-8 mb-10 border border-gray-800 hover:border hover:border-blue-500 rounded-xs flex items-end justify-start bg-black bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {/* <div className="img h-45 w-45 object-fill">
            <img src={product.image} alt=""  className="img h-60 w-60 object-fill"/>
          </div> */}
          <div className="details text-white w-fit h-fit p-2 bg-black rounded-4xl flex gap-2 border border-gray-800">
            <div className="product-title font-bold flex items-center p-2 text-sm">
              {product.title.slice(0, 18)}
            </div>
            <div className="product-price bg-blue-600 rounded-3xl w-fit p-1.5 text-sm font-bold flex items-center justify-center min-w-15">
              ${product.price}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
