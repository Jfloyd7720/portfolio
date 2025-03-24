import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  // Set active tab based on current route
  const getActiveTab = () => {
    const currentItem = navItems.find(
      (item) => location.pathname === item.path
    );
    return currentItem ? currentItem.name : "";
  };

  return (
    <header className="code-header">
      {/* IDE-style top bar */}
      <div className="ide-bar">
        <div className="ide-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="ide-title">portfolio.jsx</div>
      </div>

      {/* Tabbed navigation */}
      <nav className="code-nav">
        <div className="tabs-container">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `code-tab ${isActive ? "active" : ""}`
              }
            >
              {item.name}
              <div className="tab-indicator"></div>
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button (terminal style) */}
        <button
          className={`terminal-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span>&gt;_{isMenuOpen ? " close" : " menu"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-code-nav ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `mobile-tab ${isActive ? "active" : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
