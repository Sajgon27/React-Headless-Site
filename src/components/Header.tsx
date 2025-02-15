import  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon for toggle button

const Header = () => {
  const location = useLocation();
  const bgColor = location.pathname === "/" ? "bg-[#FFFCF8]" : "bg-yellow";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${bgColor} text-white py-8 z-20`}>
      <nav className="container flex items-center justify-between relative">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-13 w-auto" />
        </Link>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 lg:space-x-16 text-secondary">
          <li>
          <Link to="/#nauczyciele" onClick={() => setIsOpen(false)}>Nauczyciele</Link>
          </li>
          <li>
            <Link to="/o-nas">O nas</Link>
          </li>
          <li>
            <Link to="/metody-nauczania">Metody nauczania</Link>
          </li>
          <li>
            <Link className="border border-black px-5 py-4 rounded-full" to="https://patronite.pl/ksaweryknotz">
              Wesprzyj nas
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute mt-2 top-full left-0 w-full bg-white text-secondary flex flex-col items-start p-4 space-y-5 lg:hidden shadow-lg">
            <li>
              <Link to="/#nauczyciele" onClick={() => setIsOpen(false)}>Nauczyciele</Link>
            </li>
            <li>
              <Link to="/o-nas" onClick={() => setIsOpen(false)}>O nas</Link>
            </li>
            <li>
              <Link to="/metody-nauczania" onClick={() => setIsOpen(false)}>Metody nauczania</Link>
            </li>
            <li>
              <Link  to="https://patronite.pl/ksaweryknotz" onClick={() => setIsOpen(false)}>
                Wesprzyj nas
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

