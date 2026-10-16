import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <div className="">
      <p className="text-zinc-500 py-1 text-sm">Collection</p>
      <nav className="text-white flex flex-col">
        <Link to="/bags" className="py-1"> bags</Link>
        <Link to="/clothing" className="py-1"> clothing</Link>
        <Link to="/" className="py-1"> Shop All</Link>
        <Link to="/stickers" className="py-1"> Stickers</Link>
      </nav>
    </div>
  );
};

export default Collection;
