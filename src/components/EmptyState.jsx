const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Produk tidak ditemukan"
        className="w-36 mb-6 opacity-70"
      />

      <h3 className="text-lg font-semibold text-gray-600">
        Produk tidak ditemukan
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        Coba gunakan kata kunci lain
      </p>
    </div>
  );
};

export default EmptyState;
