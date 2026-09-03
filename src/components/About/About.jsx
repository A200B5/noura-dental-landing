import Icon from '../Icon/Icon';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-photo" role="img" aria-label="Dentist speaking with a patient"></div>
        <div className="about-copy">
          <p className="eyebrow"><span></span> The Noura difference</p>
          <h2>Expert care, with a human touch.</h2>
          <p>We believe dentistry should feel less clinical and more personal. Our team takes the time to listen, explain, and make every visit feel easy.</p>
          <ul>
            <li><Icon name="check" size={18} /> Clear, honest treatment plans</li>
            <li><Icon name="check" size={18} /> A calm, welcoming space</li>
            <li><Icon name="check" size={18} /> Care that fits your life</li>
          </ul>
          <a className="text-link" href="#visit">Meet our approach <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </section>
  );
};

export default About;
