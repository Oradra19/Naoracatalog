import { useNavigate } from "react-router-dom";

/* ⭐ STAR RATING COMPONENT */
const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const totalStars = 5;

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < filledStars ? "currentColor" : "none"}
          stroke="currentColor"
          className={`w-5 h-5 ${
            i < filledStars ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.48 3.499a.75.75 0 011.04 0l2.86 2.93 4.05.59a.75.75 0 01.42 1.28l-2.93 2.86.69 4.03a.75.75 0 01-1.09.79L12 14.77l-3.62 1.9a.75.75 0 01-1.09-.79l.69-4.03-2.93-2.86a.75.75 0 01.42-1.28l4.05-.59 2.86-2.93z"
          />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const discount = Math.round(product.discountPercentage || 0);

  const finalPrice = (
    product.price -
    (product.price * discount) / 100
  ).toFixed(2);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        bg-[#0B72B5]
        rounded-2xl
        overflow-hidden
        cursor-pointer
        flex
        flex-col
        transition
        hover:scale-[1.02]
      "
    >
      {/* IMAGE */}
      <div className="bg-white p-4 relative">
        {/* DISCOUNT BADGE */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
            -{discount}%
          </span>
        )}

        <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="text-white p-4 flex flex-col flex-1">
        {/* TITLE + STOCK */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg leading-tight">
            {product.title}
          </h3>
          <span className="text-sm">
            Stock : {product.stock}
          </span>
        </div>

        {/* DESC */}
        <p className="text-sm opacity-90 line-clamp-3">
          {product.description}
        </p>

        {/* ⭐ RATING */}
        <div className="flex items-center gap-2 mt-4">
          <StarRating rating={product.rating} />
          <span className="text-xs opacity-80">
            ({product.rating})
          </span>
        </div>

        {/* FOOTER */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="bg-white text-black text-xs px-4 py-1 rounded-full">
            {product.category}
          </span>

          <div className="text-right">
            <span className="text-lg font-semibold block">
              ${finalPrice}
            </span>

            {discount > 0 && (
              <span className="text-xs line-through opacity-70">
                ${product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
