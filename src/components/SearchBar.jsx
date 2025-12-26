const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mt-4 mb-6">
      <input
        type="text"
        placeholder="Cari produk..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          md:w-80
          px-4
          py-2.5
          border
          rounded-xl
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-sky-500
          focus:border-sky-500
          transition
        "
      />
    </div>
  );
};

export default SearchBar;
