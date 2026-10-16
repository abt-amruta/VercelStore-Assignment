import CartContext from "../src/context/CartContext";
import Home from "./pages/home/Home";
import Nav from "../src/components/nav/NavBar";
import ProductCard from "../src/components/productcard/ProductCard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<Home />} />
          <Route path="/clothing" element={<Home />} />
          <Route path="/stickers" element={<Home />} />
          <Route path="/products/:id" element={<ProductCard />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
