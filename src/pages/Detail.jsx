import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../contexts/CartContext";
import Navbar from "../components/NavbarDetail";
import Footer from "../components/Footer";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const discount = Math.round(product.discountPercentage || 0);
  const finalPrice = (
    product.price -
    (product.price * discount) / 100
  ).toFixed(2);

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        categories={[product.category]}
        onCategoryClick={(cat) =>
          navigate("/", { state: { category: cat } })
        }
      />

      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
            {discount > 0 && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                -{discount}%
              </span>
            )}

            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain h-96 w-full"
            />
          </div>

          {/* INFO */}
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                {product.title}
              </h1>
              <span className="text-sm">
                Stok : {product.stock}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed">
              {product.description}
            </p>

            <p className="mt-4">Rating : {product.rating}</p>
            <p className="mt-2">Brand : {product.brand}</p>
            <p className="mt-2">
              Warranty : {product.warrantyInformation}
            </p>

            <span className="inline-block mt-4 border px-4 py-1 rounded-full text-sm">
              {product.category}
            </span>

            {/* PRICE */}
            <div className="mt-4">
              <p className="text-2xl font-semibold">
                ${finalPrice}
              </p>

              {discount > 0 && (
                <p className="text-sm line-through text-gray-500">
                  ${product.price}
                </p>
              )}
            </div>

            {/* QTY */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="border px-3 py-1 rounded"
              >
                -
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="border px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product, qty)}
              className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white"
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-sky-600">
            Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {(product.reviews || []).map((r, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 text-sm border-blue-500"
              >
                <div className="flex justify-between mb-2">
                  <strong>{r.reviewerName}</strong>
                  <span>{r.date?.slice(0, 10)}</span>
                </div>
                <p>{r.comment}</p>
                <p className="mt-3 text-xs text-blue-500">
                  {r.reviewerEmail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
