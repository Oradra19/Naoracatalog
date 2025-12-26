import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarDetail = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0B72B5] text-white shadow">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-4xl font-bold hover:opacity-80"
          aria-label="Back"
        >
          ←
        </button>

        <div className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default NavbarDetail;
