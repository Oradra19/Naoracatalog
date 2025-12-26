import Logo from "../assets/logo.png";

const Navbar = ({ categories, onSelect, activeCategory }) => {
  return (
    <nav className="bg-sky-600 text-white">
      {/* LOGO */}
      <div className="flex justify-center py-4">
        <img
          src={Logo}
          alt="Grasindo"
          className="h-10 object-contain"
        />
      </div>

      {/* MENU */}
      <ul className="flex justify-center gap-8 pb-4 text-sm">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <li
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                cursor-pointer capitalize
                border-b-2
                ${
                  isActive
                    ? "border-white font-semibold"
                    : "border-transparent opacity-80 hover:opacity-100"
                }
                transition-colors duration-200
              `}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
