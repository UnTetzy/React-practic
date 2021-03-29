import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a className="nav__list-link" href="#">
            Profile
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-link" href="#">
            News
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-link" href="#">
            Dialogs
          </a>
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