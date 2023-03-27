import "./AddNewWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const { v4: uuid } = require("uuid");

const AddNewWarehouseForm = () => {
  const [warehouse, setWarehouse] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();

  const handleChangeWarehouse = (event) => {
    setWarehouse(event.target.value);
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


  const validatePhoneNumber = () =>
    phoneNumber.length >= 7 && phoneNumber.length <= 15;

  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const validateEmail = () => emailValidator;

  const isFormValid = () => {
    if (
      warehouse === "" ||
      streetAddress === "" ||
      city === "" ||
      country === "" ||
      contactName === "" ||
      position === "" ||
      phoneNumber === "" ||
      email === ""
    ) {
      return setEmpty(true);
    }
    setEmpty(false);
  
    if (!validatePhoneNumber()) {
      return setPhoneError(true);
    }
    setPhoneError(false);
  
    if (!validateEmail()) {
      return setEmailError(true);
    }
    setEmailError(false);
  
    return true;
  };

  const handleSubmit = (event) => {
    setSubmit(true);
    event.preventDefault();

    if (isFormValid()) {
      axios.post("http://localhost:8080/warehouses/", {
          id: uuid(),
          warehouse_name: warehouse,
          address: streetAddress,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: position,
          contact_phone: phoneNumber,
          contact_email: email,
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Warehouse successfully added, redirecting to homepage.");
      setAdd(true);
      return setTimeout(() => {
        navigate("/warehouses");
      }, 2000);
    }
  };
  const handleCancel = () => {
    return navigate("/warehouses");
  };

  return (
    <section className="add-form-wrapper">
      <div className="add-form-wrapper__heading">
        <Link to="/warehouses">
          <img src={ArrowBack} alt="ArrowBackButton" />
        </Link>
        <h1 className="add-form-wrapper__warehouse">Add New Warehouse</h1>
      </div>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="add-form__wrapper">
          <WarehouseDetailsForm
            handleChangeWarehouse={handleChangeWarehouse}
            handleChangeStreetAddress={handleChangeStreetAddress}
            handleChangeCity={handleChangeCity}
            handleChangeCountry={handleChangeCountry}
            warehouse={warehouse}
            streetAddress={streetAddress}
            city={city}
            country={country}
            submit={submit}
          />
          <ContactDetailsForm
            handleChangeContactName={handleChangeContactName}
            handleChangePosition={handleChangePosition}
            handleChangePhoneNumber={handleChangePhoneNumber}
            handleChangeEmail={handleChangeEmail}
            contactName={contactName}
            position={position}
            phoneNumber={phoneNumber}
            email={email}
            submit={submit}
          />
        </div>
        <div className="add-form__button-wrapper">
          <div className="add-form__button-container">
            <button
              onClick={handleCancel}
              className="add-form__button add-form__button--1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="add-form__button add-form__button--2"
            >
              +Add Warehouse
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewWarehouseForm;
