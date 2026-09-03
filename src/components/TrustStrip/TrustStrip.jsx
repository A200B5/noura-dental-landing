import Icon from '../Icon/Icon';
import './TrustStrip.css';

const TrustStrip = () => {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        <p><Icon name="shield" /> Patient-first approach</p>
        <p><Icon name="check" /> Modern technology</p>
        <p><Icon name="sparkle" /> Personalized treatment</p>
        <p><Icon name="calendar" /> Easy online booking</p>
      </div>
    </section>
  );
};

export default TrustStrip;
