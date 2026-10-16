import { useContext } from "react";
import { CartPovider } from "../../context/CartContext";
import { Plus } from "lucide-react";

const ProductCard = () => {
  const { current, setCart } = useContext(CartPovider);
  console.log(current);
  return (
    <div className="flex justify-center">
      <div className="product-section bg-black flex justify-around items-center mx-30 p-20 h-200 w-350">
        <div className="img h-100 w-350 flex-2 flex justify-center self-center">
          <img src={current.image} alt="" />
        </div>
        <div className="details text-white flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-3 pb-5">
            <div className="product-title text-5xl font-bold">
              {current.title}
            </div>
            <div className="product-price bg-blue-600 w-fit p-2 rounded-2xl font-bold">
              ${current.price} USD{" "}
            </div>
            <hr className="border-gray-500 mt-5" />
          </div>

          <div className="flex text-white flex-col">
            <div>
              <div className="text-sm">COLOR</div>
              <div className="m-3">
                <button className="p-2 mx-2 text-sm bg-zinc-800 rounded-xl">
                  Black
                </button>
                <button className="p-2 mx-2 text-sm bg-zinc-800 rounded-xl">
                  White
                </button>
              </div>
            </div>
            <div>
              <div className="text-sm">SIZE</div>
              <div className="m-3">
                <button className="p-2 mr-2 text-sm bg-zinc-800 rounded-2xl min-w-10">
                  S
                </button>
                <button className="p-2 mr-2 text-sm bg-zinc-800 rounded-2xl min-w-10">
                  M
                </button>
                <button className="p-2 mr-1 text-sm bg-zinc-800 rounded-2xl min-w-10">
                  L
                </button>
              </div>
            </div>
          </div>

          <div className="product-price text-zinc-400">
            {current.description}
          </div>
          <button
            className=" my-10 bg-blue-800 p-4 text-md font-bold rounded-3xl flex justify-center w-full"
            onClick={() => setCart(current)}
            disabled={true}
          >
            <span className="flex-1">
              {" "}
              <Plus />{" "}
            </span>
            <span className="text-white flex-15">Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
