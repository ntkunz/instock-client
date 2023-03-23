import "./AddNewWarehouse.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import ContactDetails from "../ContactDetails/ContactDetails";

function AddNewWarehouse() {
  return (
    <section>
      <div className="heading">
        <img src={ArrowBack} alt="ArrowBackButton" />
        <h1 className="heading__warehouse">Add New Warehouse</h1>
      </div>
      <form className="form">
        <div className="form__wrapper">
          <WarehouseDetails />
          <ContactDetails />
        </div>
        <div className="form__button-wrapper">
          <div className="form__button-container">
            <button className="form__button form__button--1">Cancel</button>
            <button className="form__button form__button--2">+Add Warehouse</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddNewWarehouse;
