import "./AddNewInventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ItemDetailsForm from "../ItemDetailsForm/ItemDetailsForm";
import ItemAvailabilityForm from "../ItemAvailabilityForm/ItemAvailabilityForm";

function AddNewInventoryItem() {

  const [warehouses, setWarehouses] = useState([]);
  const [inventories, setInventories] = useState([]);
  const [inputValues, setInputValues] = useState({
    // warehouses: [], 
    // inventories: [],
    // instock: checked, //not sure
    outofstock: '',  //not sure
    quantity: null,
    selectWarehouse: ''
  });
  
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  console.log(event.target.value)
  };

//USEEFFECT TO GET WAREHOUSE INFORMATION  -  LATER GET PASSED DOWN

const api=process.env.REACT_APP_BASEURL;
//on load get warehouses
useEffect(() => {
  getWarehouses()
  getInventories()
}, []);

//api get call function to get warehouses ==PASS DOWN LATER... MOVE FUNCTION UP LATER
function getWarehouses() {
  axios
      .get(`${api}/warehouses`)
      .then((data) => {
        if(data) {
          setWarehouses(data.data);
          console.log(data.data)
        }
      })
      .catch((err) => {
          console.log("err: ", err);
          // navigate("/404");
      });
}

function getInventories() {
  axios
      .get(`${api}/inventories`)
      .then((data) => {
        if(data) {
          setInventories(data.data);
          console.log(data.data)
        }
      })
      .catch((err) => {
          console.log("err: ", err);
          // navigate("/404");
      });
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.taget.value)
};

function handleFormCancel(e) {
  e.preventDefault();

}

console.log(inputValues.warehouses)



    return (
      <section className="container">
        <div className="heading">
          <img src={ArrowBack} alt="ArrowBackButton" />
          <h1 className="heading__title">Add New Inventory Item</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__component-container">
                <ItemDetailsForm inventories={inventories} handleOnChange={handleOnChange} />
            </div>
            <div className="form__component-container">
                <ItemAvailabilityForm 
                  warehouses={warehouses} 
                  handleOnChange={handleOnChange} 
                  inputValues={inputValues}
                  
                />
            </div>
          <div className="form__button-wrapper">
            <div className="form__button-container">
              <button className="form__button form__button--1" onClick={handleFormCancel}>Cancel</button>
              <button className="form__button form__button--2">+ Add Item</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
  
  export default AddNewInventoryItem;
  