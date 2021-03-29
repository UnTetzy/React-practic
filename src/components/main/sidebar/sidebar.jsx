import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink className="nav__list-link" to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-link" href="/news">
            News
          </a>
        </li>
        <li className="nav__list-item">
          <NavLink className="nav__list-link" to="/dialogs" activeClassName="active">
            Dialogs
          </NavLink>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-link" href="#">
            Friends
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;