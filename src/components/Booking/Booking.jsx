import Icon from '../Icon/Icon';
import './Booking.css';

const Booking = () => {
  return (
    <section id="book" className="booking container">
      <div>
        <p className="eyebrow"><span></span> Your next visit</p>
        <h2>Your best smile is closer than you think.</h2>
        <p>Book a consultation and let’s create a care plan that feels right for you.</p>
      </div>
      <form 
        className="booking-form" 
        onSubmit={(e) => { 
          e.preventDefault(); 
          alert('Thanks! This demo form is ready to connect to your booking system.'); 
        }}
      >
        <input aria-label="Full name" placeholder="Your name" required />
        <input aria-label="Email address" type="email" placeholder="Email address" required />
        <button className="button" type="submit">
          Request an appointment <Icon name="arrow" />
        </button>
      </form>
    </section>
  );
};

export default Booking;
