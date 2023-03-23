import "./ContactDetailsForm.scss";

function ContactDetailsForm() {
  return (
      <div className="contact-details">
        <h2 className="contact-details__heading">Contact Details</h2>
        <div className="contact-details__container">
          <div className="contact-details__warehouse">
            <label className="contact-details__label">Contact Name</label>
            <input className="contact-details__input" placeholder="Contact Name" />
          </div>
          <div className="contact-details__warehouse">
            <label className="contact-details__label">Position</label>
            <input className="contact-details__input" placeholder="Position" />
          </div>
          <div className="contact-details__warehouse">
            <label className="contact-details__label">Phone Number</label>
            <input className="contact-details__input" placeholder="Phone Number" />
          </div>
          <div className="contact-details__warehouse">
            <label className="contact-details__label">Email</label>
            <input className="contact-details__input" placeholder="Email" />
          </div>
        </div>
      </div>
  );
}

export default ContactDetailsForm;
