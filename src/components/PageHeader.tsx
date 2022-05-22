import { Link, NavLink } from "react-router-dom";

export default function PageHeader() {
  return (
    <div className="header">
      <nav className="navbar container">
        <div className="logo-wrapper">
          <Link to="/">Movies DB</Link>
        </div>

        <ul className="menu-items">
          <li className="menu-item">
            <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Movies
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
