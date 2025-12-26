import { useCart } from "../contexts/CartContext";

const CartModal = () => {
  const {
    cart,
    removeFromCart,
    totalPrice,
    open,
    setOpen,
    clearCart,
  } = useCart();

  if (!open) return null;

  const checkout = () => {
    alert("Thank You for Your Purchase 🙏");
    clearCart();
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">
          Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">
            Cart Empty
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.qty} x ${item.finalPrice.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={checkout}
              className="w-full mt-4 bg-green-500 text-white py-2 rounded"
            >
              Checkout
            </button>
          </>
        )}

        <button
          onClick={() => setOpen(false)}
          className="mt-4 text-sm text-gray-500 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
