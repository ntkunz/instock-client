import "./EditContactDetailsForm.scss";
import ErrorStateForm from "../ErrorStateForm/ErrorStateForm";

function EditContactDetailsForm({
  handleChangeContactName,
  handleChangePosition,
  handleChangePhoneNumber,
  handleChangeEmail,
  contactName,
  position,
  phoneNumber,
  email,
  submit,
}) {
  return (
    <div className="edit-contact-details">
      <h2 className="edit-contact-details__heading">Contact Details</h2>

      <div className="edit-contact-details__container">
        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Contact Name</label>
          <input
            value={contactName}
            className={
              submit === true && !contactName
                ? "edit-contact-details__input--error"
                : "edit-contact-details__input"
            }
            placeholder="Contact Name"
            name="contactName"
            onChange={handleChangeContactName}
          />
          {submit === true && !contactName === true && <ErrorStateForm />}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Position</label>
          <input
            value={position}
            className={
              submit === true && !position
                ? "edit-contact-details__input--error"
                : "edit-contact-details__input"
            }
            placeholder="Position"
            name="position"
            onChange={handleChangePosition}
          />
          {submit === true && !position === true && <ErrorStateForm />}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Phone Number</label>
          <input
            value={phoneNumber}
            className={
              submit === true && !phoneNumber
                ? "edit-contact-details__input--error"
                : "edit-contact-details__input"
            }
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChangePhoneNumber}
          />
          {submit === true && !phoneNumber === true && <ErrorStateForm />}
        </div>

        <div className="edit-contact-details__warehouse">
          <label className="edit-contact-details__label">Email</label>
          <input
            value={email}
            className={
              submit === true && !email
                ? "edit-contact-details__input--error"
                : "edit-contact-details__input"
            }
            placeholder="Email"
            name="email"
            onChange={handleChangeEmail}
          />
          {submit === true && !email === true && <ErrorStateForm />}
        </div>
      </div>
    </div>
  );
}

export default EditContactDetailsForm;
