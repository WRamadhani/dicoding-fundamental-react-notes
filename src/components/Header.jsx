import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li className="navigation__links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/arsip"
            >
              Arsip
            </NavLink>
          </li>
          <li className="navigation__links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notes/create"
            >
              Buat Note
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
