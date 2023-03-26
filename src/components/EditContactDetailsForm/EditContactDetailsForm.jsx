import "./EditContactDetailsForm.scss";
import ErrorLogo from "../../assets/icons/error-24px.svg"

function EditContactDetailsForm({ formData, handleChange, errorValues, submit }) {
  return (
    <div className="edit-contact-details">
      <h2 className="edit-contact-details__heading">Contact Details</h2>

      <div className="edit-contact-details__container">
        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Contact Name</label>
          <input
            value={formData.contactName}
            className="edit-contact-details__input"
            placeholder="Contact Name"
            name="contactName"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid email" />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Position</label>
          <input
            value={formData.position}
            className="edit-contact-details__input"
            placeholder="Position"
            name="position"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid email" />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Phone Number</label>
          <input
            value={formData.phoneNumber}
            className="edit-contact-details__input"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
          />
          {errorValues.phone && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid email" />
          <p className="error-container__message">Please enter a valid phone number.</p>
          </div>
          )}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Email</label>
          <input
            value={formData.email}
            className="edit-contact-details__input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errorValues.email && (
            <div className="error-container">
              <img src={ErrorLogo} alt="Error enter valid email" />
            <p className="error-container__message">Please enter a valid email. 123example@this.com</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default EditContactDetailsForm;
