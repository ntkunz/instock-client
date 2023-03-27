import "./EditWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditWarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import EditContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function EditNewWarehouseForm() {
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
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = `http://localhost:8080/warehouses/${id}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setWarehouse(response.data.warehouse_name);
      setStreetAddress(response.data.address);
      setCity(response.data.city);
      setCountry(response.data.country);
      setContactName(response.data.contact_name);
      setPosition(response.data.contact_position);
      setPhoneNumber(response.data.contact_phone);
      setEmail(response.data.contact_email);
    });
  }, []);

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

  const validatePhoneNumber = (value) =>
    /^[0-9]*$/.test(value) && value.length >= 10;

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

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

    if (!validatePhoneNumber(phoneNumber)) {
      return setPhoneError(true);
    }

    setPhoneError(false);

    if (!validateEmail(email)) {
      return setEmailError(true);
    }
    setEmailError(false);

    return true;
  };

  const handleSubmit = (event) => {
    setSubmit(true);
    event.preventDefault();
    if (isFormValid()) {
      axios
        .put(URL, {
          warehouse_name: warehouse,
          address: streetAddress,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: position,
          contact_email: email,
          contact_phone: phoneNumber,
        })
        .catch((error) => {
          console.log(error.response);
        });
      alert("Edit succesful redirecting to warehouses.")
      return setTimeout(() => {
        navigate("/warehouses");
      }, 1500);
    }
  };

  const handleCancel = () => {
    return navigate("/");
  };

  return (
    <section className="edit-wrapper">
      <div className="edit-wrapper__heading">
        <Link to="/warehouses">
          <img src={ArrowBack} alt="ArrowBackButton" />
        </Link>
        <h1 className="edit-wrapper__warehouse">Edit Warehouse</h1>
      </div>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-form__wrapper">
          <EditWarehouseDetailsForm
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
          <EditContactDetailsForm
            handleChangeContactName={handleChangeContactName}
            handleChangePosition={handleChangePosition}
            handleChangePhoneNumber={handleChangePhoneNumber}
            handleChangeEmail={handleChangeEmail}
            contactName={contactName}
            position={position}
            phoneNumber={phoneNumber}
            phoneError={phoneError}
            email={email}
            emailError={emailError}
            submit={submit}
          />
        </div>
        <div className="edit-form__button-wrapper">
          <div className="edit-form__button-container">
            <button
              onClick={handleCancel}
              className="edit-form__button edit-form__button--1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="edit-form__button edit-form__button--2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditNewWarehouseForm;
