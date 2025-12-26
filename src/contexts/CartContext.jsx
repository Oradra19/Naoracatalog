import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product, qty = 1) => {
    // hitung harga final (diskon) & kunci ke 2 desimal
    const discount = Math.round(product.discountPercentage || 0);
    const finalPrice = Number(
      (
        product.price -
        (product.price * discount) / 100
      ).toFixed(2)
    );

    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);

      if (exist) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty,
          finalPrice, 
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice =
    cart.reduce((sum, item) => {
      return (
        sum +
        Math.round(item.finalPrice * 100) * item.qty
      );
    }, 0) / 100;

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        totalQty,
        open,
        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
