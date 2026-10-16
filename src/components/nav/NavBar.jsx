import { Link } from "react-router-dom";
import { Eject, ShoppingCart, Search, Menu } from "lucide-react";
import { useContext, useState } from "react";
import { CartPovider } from "../../context/CartContext";

const NavBar = () => {
  const { setShowCart } = useContext(CartPovider);
  // const [nav, setNav] = useState(false);
  return (
    <>
      <div className="nav-container py-3 px-6 bg-zinc-900 w-full">
        <div className="navbar bg-zinc-900 text-zinc-400 flex justify-between items-center">
          <div className="lg:flex justify-around ">
            {/* <button className="lg:hidden" onClick={() => setNav(true)}>
              <Menu />
            </button> */}
            <b className="p-2 flex gap-2 text-white">
              <Eject />
              <span>ACME STORE</span>
            </b>
            <nav className="flex justify-around items-center">
              <Link to="/bags" className="p-2">
                {" "}
                bags
              </Link>
              <Link to="/clothing" className="p-2">
                {" "}
                clothing
              </Link>
              <Link to="/" className="p-2">
                {" "}
                Shop All
              </Link>
              <Link to="/stickers" className="p-2">
                {" "}
                Stickers
              </Link>
            </nav>
          </div>
          <div className="nav-search border border-gray-700 p-1 rounded-xl min-w-100 w-200 flex  justify-between items-center px-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="p-1 focus:outline-none
              focus:ring-0"
            />
            <Search size={18} />
          </div>
          <div className="nav-cart text-white">
            <button
              className="cart p-3 border border-gray-700 rounded-xl cursor-default"
              onClick={() => {
                setShowCart((prev) => !prev);
                console.log("cart clicked");
              }}
            >
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
