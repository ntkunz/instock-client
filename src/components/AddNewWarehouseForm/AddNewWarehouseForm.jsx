import "./AddNewWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddNewWarehouseForm() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  //CHANGE HANDLER TO UPDATE STATE IN THE INPUT
  const handleChangeWarehouse = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleChangeStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeContactName = (event) => {
    setContactName(event.target.value);
  };
  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const isPhoneNumberValid = () => {
    const regex = /^[0-9]+$/;
    return regex.test(phoneNumber);
  };

  const isEmailValid = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const formValidation = () => {
    if (
      !warehouseName ||
      !streetAddress ||
      !city ||
      !country ||
      !contactName ||
      !position ||
      !phoneNumber ||
      !email
    ) {
      setFormError("Please fill out all fields.");
      return false;
    } else if (!isPhoneNumberValid()) {
      setFormError("Phone number can only contain numbers.");
      return false;
    } else if (!isEmailValid()) {
      setFormError("Invalid email address.");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
    }
  };

  return (
    <section className="form-wrapper">
      <div className="heading">
        <Link to="/">
          <img src={ArrowBack} alt="ArrowBackButton" />
        </Link>
        <h1 className="heading__warehouse">Add New Warehouse</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__wrapper">
          <WarehouseDetailsForm 
          handleChangeWarehouse = {handleChangeWarehouse}
          handleChangeStreetAddress = {handleChangeStreetAddress}
          handleChangeCity = {handleChangeCity}
          handleChangeCountry = {handleChangeCountry}
           />
          <ContactDetailsForm 
          handleChangeContactName = {handleChangeContactName}
          handleChangePosition = {handleChangePosition}
          handleChangePhoneNumber = {handleChangePhoneNumber}
          handleChangeEmail = {handleChangeEmail}
          />
        </div>
        <div className="form__button-wrapper">
          <div className="form__button-container">
            <button className="form__button form__button--1">Cancel</button>
            <button className="form__button form__button--2">
              +Add Warehouse
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddNewWarehouseForm;
