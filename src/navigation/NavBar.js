import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleCloseMenu = () => {
    setMenu(true);
  };

  return (
    <nav className="md:flex justify-between max-w-3xl mx-auto p-5">
      <div className="flex justify-between">
        <Link to="/" className="hover:text-gray-500" onClick={handleCloseMenu}>
          Open Data Explorer
        </Link>
        <button onClick={handleMenu} className="md:hidden">
          {menu ? "Menu" : "Close Menu"}
        </button>
      </div>
      <div className={`md:flex ${menu && "hidden"}`}>
        <a
          href="https://github.com/opendataexplorer"
          target="_blank"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          Alpha
        </a>
        <Link
          to="/joinus"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          About
        </Link>
        <Link
          to="/joinus"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          Team
        </Link>
        <Link
          to="/joinus"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          Join Us
        </Link>
        <Link
          to="/joinus"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          News
        </Link>
        <a
          href="https://github.com/opendataexplorer"
          target="_blank"
          className="hover:text-gray-500 md:px-2 block"
          onClick={handleCloseMenu}
        >
          Github
        </a>
      </div>
    </nav>
  );
}
