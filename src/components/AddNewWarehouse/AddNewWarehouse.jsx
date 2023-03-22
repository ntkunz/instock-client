import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./AddNewWarehouse.scss";

function AddNewWarehouse() {
  return (
    <div>
      <section>
        <div className="heading">
          <img src={ArrowBack} alt="ArrowBackButton" />
          <h1 className="heading__warehouse">Add New Warehouse</h1>
        </div>

        <form className="form">
          <h2 className="form__heading">Warehouse Details</h2>
          <div className="form__container">
            <div className="form__warehouse">
              <label className="form__label">Warehouse Name</label>
              <input className="form__input" placeholder="Warehouse Name" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">Street Address</label>
              <input className="form__input" placeholder="Street Address" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">City</label>
              <input className="form__input" placeholder="City" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">Country</label>
              <input className="form__input" placeholder="Country" />
            </div>
          </div>
          <h2 className="form__heading">Contact Details</h2>
          <div className="form__container">
            <div className="form__warehouse">
              <label className="form__label">Contact Name</label>
              <input className="form__input" placeholder="Contact Name" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">Position</label>
              <input className="form__input" placeholder="Position" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">Phone Number</label>
              <input className="form__input" placeholder="Phone Number" />
            </div>
            <div className="form__warehouse">
              <label className="form__label">Email</label>
              <input className="form__input" placeholder="Email" />
            </div>
          </div>
          <div className="form__button-wrapper">
            <button className="form__button form__button--1">Cancel</button>
            <button className="form__button form__button--2">+Add Warehouse</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddNewWarehouse;
