import "./AddNewInventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ItemDetailsForm from "../ItemDetailsForm/ItemDetailsForm";
import ItemAvailabilityForm from "../ItemAvailabilityForm/ItemAvailabilityForm";

function AddNewInventoryItem() {

//USEEFFECT TO GET WAREHOUSE INFORMATION  -  LATER GET PASSED DOWN

const api=process.env.REACT_APP_BASEURL;
//on load get warehouses
useEffect(() => {
  getWarehouses()
}, []);

//api get call function to retrieve single video details and setMainVideo
function getWarehouses() {
  axios
      .get(`${api}/warehouses`)
      .then((data) => {
          console.log(data.data)
      })
      .catch((err) => {
          console.log("err: ", err);
          // navigate("/404");
      });
}





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
                <ItemAvailabilityForm />
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
  