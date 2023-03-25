import "./EditWarehouseDetailsForm.scss";
import ErrorLogo from "../../assets/icons/error-24px.svg";

function EditWarehouseDetailsForm({ formData, handleChange, errorValues }) {
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__container">
        <div className="warehouse-details__warehouse">
          <h2 className="warehouse-details__heading">Warehouse Details</h2>
    
          <label htmlFor="warehouseName" className="warehouse-details__label">Warehouse Name</label>
          <input
            value={formData.warehouse}
            className="warehouse-details__input"
            placeholder="Warehouse Name"
            type="text"
            name="warehouse"
            id="warehouse"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid warehouse name" />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

        <div className="warehouse-details__warehouse">
          <label htmlFor="streetAddress" className="warehouse-details__label">Street Address</label>
          <input
            value={formData.address}
            className="warehouse-details__input"
            placeholder="Street Address"
            type="text"
            name="streetAddress"
            id="streetAddress"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid street address" />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

        <div className="warehouse-details__warehouse">
          <label htmlFor="city" className="warehouse-details__label">City</label>
          <input
            value={formData.city}
            className="warehouse-details__input"
            placeholder="City"
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error exclamation " />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

        <div className="warehouse-details__warehouse">
          <label htmlFor="country" className="warehouse-details__label">Country</label>
          <input
            value={formData.country}
            className="warehouse-details__input"
            placeholder="Country"
            type="text"
            id="country"
            name="country"
            onChange={handleChange}
          />
          {errorValues.empty && (
            <div className="error-container">
            <img src={ErrorLogo} alt="Error enter valid email" />
          <p className="error-container__message">Required field.</p>
          </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default EditWarehouseDetailsForm;
