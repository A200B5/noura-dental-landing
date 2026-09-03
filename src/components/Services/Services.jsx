import Icon from '../Icon/Icon';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span></span> Our services</p>
          <h2>Everything your smile needs.</h2>
        </div>
        <p>From your first visit to your forever smile, we make every step feel simple and personal.</p>
      </div>
      <div className="service-grid">
        {servicesData.map(([title, description], i) => (
          <article className="service-card" key={title}>
            <span className="service-number">0{i + 1}</span>
            <div className="service-icon">
              <Icon name={i === 0 ? 'shield' : i === 1 ? 'sparkle' : 'check'} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#book" aria-label={`Learn more about ${title}`}>
              Learn more <Icon name="arrow" size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
