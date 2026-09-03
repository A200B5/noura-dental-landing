import Icon from '../Icon/Icon';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span></span> A brighter smile starts here</p>
        <h1>Care that makes you <em>smile.</em></h1>
        <p className="hero-text">
          Thoughtful, modern dentistry for every stage of your smile. Feel calm, cared for, and completely at home.
        </p>
        <div className="hero-actions">
          <a className="button" href="#book">Book your appointment <Icon name="arrow" /></a>
          <a className="text-link" href="#services">Explore our care <Icon name="arrow" size={17} /></a>
        </div>
        <div className="hero-proof">
          <div className="avatars">
            <span></span><span></span><span></span><b>2k+</b>
          </div>
          <p>Trusted by more than <strong>2,000 happy patients</strong></p>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo" role="img" aria-label="Smiling woman at a dental appointment"></div>
        <div className="floating-card card-top">
          <span className="card-icon"><Icon name="sparkle" size={18} /></span>
          <div><b>Comfort-first care</b><small>Designed around you</small></div>
        </div>
        <div className="floating-card card-bottom">
          <div className="rating"><Icon name="star" size={15} /><b>4.9</b></div>
          <small>From 500+ reviews</small>
        </div>
        <div className="arch"></div>
      </div>
    </section>
  );
};

export default Hero;
