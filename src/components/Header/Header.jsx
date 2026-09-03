import Icon from '../Icon/Icon';
import './Header.css';

const Header = () => {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Noura Dental home">
          <span className="brand-mark">N</span>
          <span>Noura <i>Dental</i></span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">Why us</a>
          <a href="#visit">Visit us</a>
        </div>
        <a className="button button-small" href="#book">
          Book a visit <Icon name="arrow" size={16} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
