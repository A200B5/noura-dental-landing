import Icon from '../Icon/Icon';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="visit">
      <div className="container footer-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">N</span>
          <span>Noura <i>Dental</i></span>
        </a>
        <p>Modern dental care, made personal.</p>
        <a className="phone" href="tel:+20255501234">
          <Icon name="phone" size={17} /> +20 2 5550 1234
        </a>
      </div>
    </footer>
  );
};

export default Footer;
