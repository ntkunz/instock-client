import "./AddNewWarehouse.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import ContactDetails from "../ContactDetails/ContactDetails";
import { useState } from "react";
import axios from "axios";



function AddNewWarehouse() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");


  //CHANGE HANDLER TO UPDATE STATE IN THE INPUT
  const handleChangeWarehouse = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeStreetAddress = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeCity = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeContactName = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangePosition = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setWarehouseName(event.target.value);
  };

  const [errors, setErrors] = useState({})

  const isPhoneNumberValid = () => phoneNumber.length >= 7 && phoneNumber.length <= 11

  // const isFormValid = () => {
  //   if (warehouseName === "" || streetAddress === "" || city === "" || country === "" || contactName === "" || position === "" || phoneNumber === "" || email === ""){
  //    return isEmpty(true);
  //   }
  //   isEmpty(false);
  // };


  return (
    <section className="form-wrapper">
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
