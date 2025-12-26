import { useCart } from "../contexts/CartContext";

const CartIcon = () => {
  const { totalQty, setOpen } = useCart();

  return (
    <button
      onClick={() => setOpen(true)}
      className="
        fixed 
        top-6 
        right-6 
        z-[9999]
        bg-white
        shadow-lg
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        text-xl
      "
    >
      🛒

      {totalQty > 0 && (
        <span
          className="
            absolute
            -top-1
            -right-1
            bg-red-500
            text-white
            text-xs
            w-5
            h-5
            flex
            items-center
            justify-center
            rounded-full
          "
        >
          {totalQty}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
