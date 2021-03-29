import './../../global.css';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo header__inner-logo"  href="#">
            <img className="logo__img header__inner-logo_img" src="https://cdn.worldvectorlogo.com/logos/slack.svg" alt="Logo"/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;