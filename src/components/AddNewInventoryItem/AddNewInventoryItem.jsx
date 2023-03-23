import "./AddNewInventoryItem.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ItemDetailsForm from "../ItemDetailsForm/ItemDetailsForm";
import ItemAvailabilityForm from "../ItemAvailabilityForm/ItemAvailabilityForm";

function AddNewInventoryItem() {
    return (
      <section className="container">
        <div className="heading">
          <img src={ArrowBack} alt="ArrowBackButton" />
          <h1 className="heading__title">Add New Inventory Item</h1>
        </div>
        <form className="form">
            <div className="form__component-container">
                <ItemDetailsForm />
            </div>
            <div className="form__component-container">
                {/* <ItemAvailabilityForm /> */}
            </div>
          <div className="form__button-wrapper">
            <div className="form__button-container">
              <button className="form__button form__button--1">Cancel</button>
              <button className="form__button form__button--2">+ Add Item</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
  
  export default AddNewInventoryItem;
  