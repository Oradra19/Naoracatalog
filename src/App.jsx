import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { CartProvider } from "./contexts/CartContext";
import CartIcon from "./components/CartIcon";
import CartModal from "./components/CartModal";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartIcon />
        <CartModal />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
