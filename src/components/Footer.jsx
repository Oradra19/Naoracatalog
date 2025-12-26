import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import Maps from "../assets/map.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white mt-16">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        
        {/* Left */}
        <div>
          <img
            src={Logo}
            alt="Grasindo"
            className="h-12 w-auto object-contain mb-4"
          />

          <p className="text-sm leading-relaxed max-w-md opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-sky-600">
              <FaInstagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" aria-label="TikTok" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-sky-600">
              <FaTiktok size={18} />
              <span className="sr-only">TikTok</span>
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-sky-600">
              <FaFacebook size={18} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-sky-600">
              <FaYoutube size={18} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-semibold mb-3">Find Us</h3>

          <a
            href="https://maps.app.goo.gl/k5MXszb1NWDMAQoP7"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-white/20"
          >
            <img
              src={Maps}
              alt="Map location"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-sky-700 text-center text-sm py-3">
        ©2025 Copyright Ogya Rajendra
      </div>
    </footer>
  );
};

export default Footer;
