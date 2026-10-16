import { useContext } from "react";
import { CartPovider } from "../../context/CartContext";
import { X, ShoppingCart } from "lucide-react";

const MyCart = () => {
  console.log("component called");

  const { cart, setShowCart } = useContext(CartPovider);
  return (
    <>
      <div className="cart fixed w-90 top-0 h-full bg-zinc-950 text-white shadow-2xl z-50 p-6 ">
        <div className="flex justify-between">
          <div className="font-bold text-xl">My Cart</div>
          <button
            onClick={() => setShowCart(false)}
            className="border p-1 border-zinc-700"
          >
            <X />
          </button>
        </div>
        <div className="flex justify-center">
          {cart.length === 0 ? (
            <div className="mt-20 text-2xl font-bold flex flex-col justify-center items-center">
              {" "}
              <div className="p-5">
                <ShoppingCart size={60} />
              </div>
              Your Cart is Empty{" "}
            </div>
          ) : (
            <div>{cart}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCart;
